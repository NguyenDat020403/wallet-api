import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { IsAddress } from 'src/common/validators';
export class CreateNetworkSwapDto {
  @IsAddress()
  @IsNotEmpty()
  swap_contract_address: string;

  @IsAddress()
  @IsNotEmpty()
  factory_contract_address: string;

  @IsAddress()
  @IsNotEmpty()
  quote_contract_address: string;

  @IsAddress()
  @IsNotEmpty()
  wrapped_token_address: string;
}
export class CreateNetworkDto {
  @IsString()
  name: string;

  @IsUrl()
  rpc_url: string;

  @IsNumber()
  chain_id: number;

  @IsString()
  current_symbol: string;

  @IsString()
  @IsOptional()
  block_explorer_url: string;

  @IsString()
  @IsOptional()
  thumbnail: string;

  @IsBoolean()
  @IsOptional()
  is_default_network: boolean;

  @ValidateNested()
  @Type(() => CreateNetworkSwapDto)
  @IsOptional()
  network_swap?: CreateNetworkSwapDto;
}
