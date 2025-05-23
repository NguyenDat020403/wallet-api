import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { FeeDataEVM } from 'src/utils/types';

export class FeeRequest {
  @IsString()
  @IsNotEmpty()
  chain_id: string;
  @IsString()
  @IsOptional()
  ownerAddress: string;
  @IsOptional()
  amount: number;
}

export type FeeResponse = {
  low: Low;
  medium: Medium;
  high: High;
  estimatedBaseFee: string;
  networkCongestion: number;
  latestPriorityFeeRange: string[];
  historicalPriorityFeeRange: string[];
  historicalBaseFeeRange: string[];
  priorityFeeTrend: string;
  baseFeeTrend: string;
  version: string;
};
export interface Low {
  suggestedMaxPriorityFeePerGas: string;
  suggestedMaxFeePerGas: string;
  minWaitTimeEstimate: number;
  maxWaitTimeEstimate: number;
}

export interface Medium {
  suggestedMaxPriorityFeePerGas: string;
  suggestedMaxFeePerGas: string;
  minWaitTimeEstimate: number;
  maxWaitTimeEstimate: number;
}

export interface High {
  suggestedMaxPriorityFeePerGas: string;
  suggestedMaxFeePerGas: string;
  minWaitTimeEstimate: number;
  maxWaitTimeEstimate: number;
}

export type levelFee = {
  suggestedMaxPriorityFeePerGas: string;
  suggestedMaxFeePerGas: string;
  minWaitTimeEstimate: number;
  maxWaitTimeEstimate: number;
};

export type TransactionRequestBTC = {
  privateKeyWIF: string;
  receiverAddress: string;
  sendAddress: string;
  amount: number;
  feeSelected: number;
};
export type TransactionRequestEVM = {
  privateKey: string;
  asset?: string;
  from: string;
  to: string;
  amount: string;
  rpc_url: string;
  contract_address?: string;
  decimals: number;
  fee: {
    suggestedMaxPriorityFeePerGas: string;
    suggestedMaxFeePerGas: string;
  };
};

export type TransactionConfirmBTC = {
  transactionHex: string;
  toAddress: string;
};
export type TransactionStatusRequestBTC = {
  tx: string;
};
export interface TransactionRequest {
  address: string;
}
export interface TransactionHistoryRequest extends TransactionRequest {
  token_id: string;
}
export interface TransactionHistory {
  txid: string;
  version: number;
  locktime: number;
  vin: Vin[];
  vout: Vout[];
  size: number;
  weight: number;
  sigops: number;
  fee: number;
  status: Status;
}
export interface Vin {
  txid: string;
  vout: number;
  prevout: Prevout;
  scriptsig: string;
  scriptsig_asm: string;
  witness: string[];
  is_coinbase: boolean;
  sequence: number;
}

export interface Prevout {
  scriptpubkey: string;
  scriptpubkey_asm: string;
  scriptpubkey_type: string;
  scriptpubkey_address: string;
  value: number;
}

export interface Vout {
  scriptpubkey: string;
  scriptpubkey_asm: string;
  scriptpubkey_type: string;
  scriptpubkey_address: string;
  value: number;
}

export interface Status {
  confirmed: boolean;
  block_height: number;
  block_hash: string;
  block_time: number;
}
export interface TransactionEVM {
  _type: string;
  blockNumber: any;
  blockHash: any;
  blobVersionedHashes: any;
  chainId: string;
  data: string;
  from: string;
  gasLimit: string;
  gasPrice: any;
  hash: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  maxFeePerBlobGas: any;
  nonce: number;
  signature: Signature;
  to: string;
  type: number;
  value: string;
}

export interface Signature {
  _type: string;
  networkV: any;
  r: string;
  s: string;
  v: number;
}
