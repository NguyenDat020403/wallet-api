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
  @IsUUID('4')
  @IsNotEmpty()
  wallet_id: string;

  @IsString()
  @IsNotEmpty()
  token_name: string;

  @IsString()
  @IsNotEmpty()
  symbol: string;

  @IsNumber()
  decimals: number;

  @IsString()
  contract_address: string;

  @IsString()
  @IsOptional()
  thumbnail: string;

  @IsString()
  @IsOptional()
  price_feed_id?: string;

  @IsString()
  @IsOptional()
  percent_change_24h: string;

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

  @IsUUID('4')
  @IsNotEmpty()
  wallet_id: string;
}

export class QueryTokensDto extends PaginationDto {
  @IsUUID('4')
  network_id: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  exclude_contract_addresses?: string[];
}

export class GetTokenDetailDTO {
  @IsUUID('4')
  token_id: string;
}
export type TokenMetadata = {
  chainId: number;
  address: string;
  token_name: string;
  symbol: string;
  decimals: number;
  thumbnail: string;
};
