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
export interface ChainList {
  comments: string;
  totalcount: number;
  result: Result[];
}

export interface Result {
  chainname: string;
  chainid: string;
  blockexplorer: string;
  apiurl: string;
  status: number;
  comment: string;
}
export interface TransactionHistoryEVM {
  hash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: string;
  gasPrice: string;
  blockHash: string;
  blockNumber: number;
  timestamp: number;
  status?: string; // Thêm trạng thái giao dịch (success/failed)
  gasLimit?: string; // Giới hạn gas
  nonce?: number; // Nonce của giao dịch
}

export interface EtherscanTransaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: string;
  gasPrice: string;
  blockHash: string;
  blockNumber: string;
  timeStamp: string;
  transactionIndex: string;
  gas: string;
  nonce: string;
  isError: string; // "0" = success, "1" = failed
}
