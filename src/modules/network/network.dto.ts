import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateNetworkDto {
  @IsString()
  @IsNotEmpty()
  network_name: string;

  @IsUrl()
  @IsNotEmpty()
  rpc_url: string;

  @IsString()
  @IsNotEmpty()
  symbol: string;

  @IsUrl()
  @IsOptional()
  block_explorer_url: string;

  @IsString()
  @IsNotEmpty()
  chain_id: string;

  @IsString()
  @IsOptional()
  price_feed_id: string;

  @IsString()
  @IsOptional()
  thumbnail: string;

  @IsBoolean()
  @IsOptional()
  is_default_network: boolean;

  @IsBoolean()
  @IsOptional()
  is_testnet: boolean;

  @IsString()
  @IsOptional()
  creator_id: string;
}
