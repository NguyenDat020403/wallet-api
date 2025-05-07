import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class GetWalletRequest {
  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  wallet_id: string;
}
export class WalletNetworksRequest {
  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  wallet_id: string;
}
export class ImportWalletRequest {
  @IsString()
  @IsNotEmpty()
  mnemonic: string;
}
