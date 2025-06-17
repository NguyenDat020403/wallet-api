import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { networks, tokens } from 'generated/prisma';
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

export interface TokenWithNetwork {
  token?: any;
  network?: any;
  contract_address?: string;
  balance?: string;
  market_data?: {
    price: number;
    percent_change_1h?: number;
    percent_change_24h?: number;
    percent_change_7d?: number;
    percent_change_30d?: number;
    volume_24h?: number;
    volume_24h_change_24h?: number;
  };
}
