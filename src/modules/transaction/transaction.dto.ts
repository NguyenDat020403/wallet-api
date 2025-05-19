import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
export type TransactionConfirmBTC = {
  transactionHex: string;
};
export type TransactionStatusRequestBTC = {
  tx: string;
};
