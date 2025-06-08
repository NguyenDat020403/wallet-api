import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class SwapTokenDto {
  @IsString()
  @IsNotEmpty()
  rpc_url: string;
  @IsString()
  @IsNotEmpty()
  privateKey: string;
  @IsString()
  @IsNotEmpty()
  tokenIn: string;
  @IsString()
  @IsNotEmpty()
  amountInDecimal: string;
  @IsBoolean()
  isSwapAtoB: boolean;
}
export class SwapInfoDto {
  @IsString()
  @IsNotEmpty()
  rpc_url: string;
  @IsString()
  @IsNotEmpty()
  contract_address: string;
}
export class GetTokenByNetworkIdDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  network_id: string;
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  wallet_id: string;
}
