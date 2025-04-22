import { Expose } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTokenDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  symbol: string;

  @IsNumber()
  decimal: number;

  @IsString()
  @IsNotEmpty()
  contract_address: string;

  @IsString()
  @IsOptional()
  thumbnail: string;

  @IsString()
  @IsOptional()
  price_feed_id?: string;

  @IsString()
  @IsOptional()
  @Expose({ name: '24hr_percent_change' })
  ['percent_change_24hr']?: string;

  @IsUUID('4')
  network_id: string;
}

export enum ESortOrder {
  ASC,
  DESC,
}
export class PaginationDto {
  @IsNotEmpty()
  offset = 0;

  @IsNotEmpty()
  limit = 10;

  @IsString()
  @IsOptional()
  sortBy: string;

  @IsString()
  @IsOptional()
  @IsEnum(ESortOrder)
  sortOrder: 'ASC' | 'DESC';

  @IsString()
  @IsOptional()
  keyword: string;
}
export class QueryTokenFromAddressDto {
  @IsString()
  @IsNotEmpty()
  contract_address: string;

  @IsUUID('4')
  network_id: string;
}

export class QueryTokensDto extends PaginationDto {
  @IsUUID('4')
  network_id: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  exclude_contract_addresses?: string[];
}
