import { Transform } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class AddNetworksDto {
  @IsArray()
  @IsString({ each: true })
  networkIds: string[];
}
export class RemoveNetworksDto extends AddNetworksDto {}

export class ImportTokenDto {
  @IsArray()
  @IsString({ each: true })
  contract_addresses: string[];

  @IsUUID('4')
  network_id: string;
}

export class GetBalanceTokenDto {
  @IsString()
  @IsOptional()
  contract_address?: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  token_decimal?: number;

  @IsUUID('4')
  network_id: string;
}
export class UserDto {
  user_id: string;
  username: string;
  avatar: string | null;
  email: string;
  created_at: Date | null;
  updated_at: Date | null;
}
