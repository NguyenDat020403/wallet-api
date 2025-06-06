import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Mnemonic } from 'src/common/validators';

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
export class UpdateWalletDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  wallet_id: string;
  @IsString()
  @IsNotEmpty()
  wallet_name: string;
}
export class DeleteWalletDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  wallet_id: string;
}
export class ImportWalletDto {
  @Mnemonic()
  mnemonic: string;
}
