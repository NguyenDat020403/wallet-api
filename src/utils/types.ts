export interface AddressUTXO {
  txid: string;
  vout: number;
  status: Status;
  value: number;
}

export interface Status {
  confirmed: boolean;
  block_height: number;
  block_hash: string;
  block_time: number;
}

export interface FeeResponseBTC {
  fastestFee: number;
  halfHourFee: number;
  hourFee: number;
  economyFee: number;
  minimumFee: number;
}

export interface FeeDataEVM {
  suggestedMaxPriorityFeePerGas: string;
  suggestedMaxFeePerGas: string;
}
