import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';
import { ethers } from 'ethers';
import {
  FeeResponse,
  levelFee,
  TransactionHistory,
  TransactionRequestBTC,
  TransactionStatusRequestBTC,
} from 'src/modules/transaction/transaction.dto';
import {
  AddressUTXO,
  EtherscanTransaction,
  FeeDataEVM,
  FeeResponseBTC,
  TransactionHistoryEVM,
} from './types';
import * as ecc from 'tiny-secp256k1';
import * as bitcoin from 'bitcoinjs-lib';
import ECPairFactory from 'ecpair';
import { NetworkConfigService } from './networkConfig';
import { generateResponse } from './response';

const ECPair = ECPairFactory(ecc);
const config = new ConfigService();

export async function sendTransactionEVM(
  privateKey: string,
  from: string,
  to: string,
  amount: string,
  rpc_url: string,
  decimals: number,
  fee?: FeeDataEVM,
  asset?: string,
  contract_address?: string,
) {
  const provider = new ethers.JsonRpcProvider(rpc_url);
  let tx: string;
  console.log(fee);
  const parseGasValue = (value: string): bigint => {
    const numericValue = Math.floor(Number(value) * 1e9);
    return ethers.parseUnits(numericValue.toString(), 'wei');
  };
  if (contract_address) {
    console.log('send token');

    const wallet = new ethers.Wallet(privateKey, provider);
    const tokenContract = new ethers.Contract(
      contract_address,
      [
        'function transfer(address to, uint256 amount) returns (bool)',
        'function balanceOf(address) view returns (uint256)',
        'function decimals() view returns (uint8)',
      ],
      wallet,
    );
    const ethBalance = await provider.getBalance(from);
    const ethBalanceFormatted = ethers.formatEther(ethBalance);
    if (ethBalance === 0n) {
      return 'check your balance';
    }
    console.log(`Số dư ETH: ${ethBalanceFormatted}`);
    const balance = await tokenContract.balanceOf(from);
    const amountInUnits = ethers.parseUnits(amount, decimals);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const tokenBalanceFormatted = ethers.formatUnits(balance, decimals);
    if (balance < amountInUnits) {
      return `check your balance - USDT balance: ${tokenBalanceFormatted}`;
    }
    const response = await tokenContract.transfer(to, amountInUnits);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.hash;
  } else {
    console.log('send native');
    const wallet = new ethers.Wallet(privateKey, provider);
    const tx = await wallet.sendTransaction({
      to: to,
      value: ethers.parseEther(amount),
      maxPriorityFeePerGas: parseGasValue(fee!.suggestedMaxPriorityFeePerGas),
      maxFeePerGas: parseGasValue(fee!.suggestedMaxFeePerGas),
      gasLimit: 21000,
    });
    // const receipt = await tx.wait();
    return tx.hash;
  }
}

// async function isBalanceEVMEnough(
//   requesterAddress: string,
//   amount: number,
//   tokenAddress?: string,
//   decimal?: number,
//   rpc_url?: string,
//   typeTransaction?: string,
// ) {
//   const config = new ConfigService();
//   const provider = new ethers.JsonRpcProvider(
//     rpc_url! + config.get('INFURA_KEY'),
//   );
//   const balanceBigInt = await provider.getBalance(requesterAddress);
//   const balanceETH = ethers.formatEther(balanceBigInt);

//   const fee = await provider.getFeeData();
//   const gasPrice = ethers.formatUnits(fee.gasPrice!);
//   const maxFeePerGas = ethers.formatUnits(fee.maxFeePerGas!);
//   const maxPriorityFeePerGas = ethers.formatUnits(fee.maxPriorityFeePerGas!);
//   if (typeTransaction === '0') {
//     const gasLimit = 21000;
//     const gasCost = parseFloat(gasPrice) * gasLimit;

//     if (gasCost + amount > Number(balanceETH)) {
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     const gasLimit = 21000;
//     const gasCost = parseFloat(maxFeePerGas) * gasLimit;
//     const totalGasCost = gasCost + parseFloat(maxPriorityFeePerGas) * gasLimit;
//     if (totalGasCost + amount > Number(balanceETH)) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

//SEND Transaction BTC
const network = bitcoin.networks.testnet;
export async function getFeeBTC(ownerAddress: string, amount) {
  const utxos: AddressUTXO[] = await getUtxos(ownerAddress);

  const feeRate = await getRecommendedFeeRate();
  let totalInput = 0;
  let inputsUsed = 0;
  for (let i = 0; i < utxos.length; i++) {
    const utxo = utxos[i];
    totalInput += utxo.value;
    inputsUsed += 1;
  }
  console.log(totalInput / 1e8);
  console.log(amount);
  const estSize = estimateTxSize(inputsUsed, 2) / 1e8;
  if (totalInput / 1e8 >= amount + feeRate.minimumFee * estSize) {
    const fee = {
      fastestFee: (estSize * feeRate.fastestFee).toFixed(8),
      halfHourFee: (estSize * feeRate.halfHourFee).toFixed(8),
      hourFee: (estSize * feeRate.hourFee).toFixed(8),
      economyFee: (estSize * feeRate.economyFee).toFixed(8),
      minimumFee: (estSize * feeRate.minimumFee).toFixed(8),
    };
    return fee;
  } else {
    return null;
  }
}

function estimateTxSize(numInputs, numOutputs) {
  return numInputs * 148 + numOutputs * 34 + 10;
}

async function getUtxos(address) {
  const res = await axios.get(
    `${config.get('API_MEMPOOL_BASE')}/address/${address}/utxo`,
  );
  return res.data as AddressUTXO[];
}

async function getRawTransaction(txid) {
  const res = await axios.get(
    `${config.get('API_MEMPOOL_BASE')}/tx/${txid}/hex`,
  );
  return res.data as string;
}

async function getRecommendedFeeRate() {
  const res = await axios.get(
    `${config.get('API_MEMPOOL_BASE')}/v1/fees/recommended`,
  );
  console.log(config.get('API_MEMPOOL_BASE'));
  console.log(res.data);
  return res.data as FeeResponseBTC;
}
export async function broadcastTransaction(rawTxHex: string) {
  const res = await axios.post(
    `${config.get('API_MEMPOOL_BASE')}/tx`,
    rawTxHex,
    {
      headers: { 'Content-Type': 'text/plain' },
    },
  );
  console.log('broadcastTransaction', res.data);
  return res.data;
}
export async function createTransactionBTC(rq: TransactionRequestBTC) {
  const keyPair = ECPair.fromWIF(rq.privateKeyWIF, network);
  const utxos = await getUtxos(rq.sendAddress);
  const rawTxs = await Promise.all(utxos.map((u) => getRawTransaction(u.txid)));

  const txb = new bitcoin.Psbt({ network: network });

  let totalInput = 0;
  const inputsUsed: { utxo: AddressUTXO; rawTx: string }[] = [];

  for (let i = 0; i < utxos.length; i++) {
    const utxo = utxos[i];
    const rawTx = rawTxs[i];
    totalInput += utxo.value;
    inputsUsed.push({ utxo, rawTx });
    if (totalInput >= rq.amount + rq.feeSelected) break;
  }

  if (totalInput < rq.amount + rq.feeSelected) {
    throw new Error(
      `Không đủ số dư. Tổng: ${totalInput}, Cần: ${
        rq.amount + rq.feeSelected
      } (bao gồm phí ${rq.feeSelected})`,
    );
  }
  txb.setVersion(2);
  txb.setLocktime(0);
  for (let i = 0; i < inputsUsed.length; i++) {
    const { utxo, rawTx } = inputsUsed[i];
    txb.addInput({
      hash: utxo.txid,
      index: utxo.vout,
      nonWitnessUtxo: Buffer.from(rawTx, 'hex'),
    });
  }

  // Add outputs
  txb.addOutput({
    script: bitcoin.address.toOutputScript(rq.receiverAddress, network),
    value: rq.amount,
  });

  // Handle change
  const change = totalInput - rq.amount - rq.feeSelected;
  if (change > 0) {
    txb.addOutput({
      script: bitcoin.address.toOutputScript(rq.sendAddress, network),
      value: change,
    });
  }

  // Sign all inputs
  for (let i = 0; i < inputsUsed.length; i++) {
    txb.signInput(i, {
      publicKey: Buffer.from(keyPair.publicKey),
      sign: (hash) => {
        const sig = keyPair.sign(hash);
        return Buffer.isBuffer(sig) ? sig : Buffer.from(sig);
      },
    });
  }

  txb.finalizeAllInputs();
  const tx = txb.extractTransaction();
  return tx.toHex();
}
export async function getTransactionStatusBTC(rq: TransactionStatusRequestBTC) {
  const res = await axios.get(
    `${config.get('API_MEMPOOL_BASE')}/tx/${rq.tx}/status`,
  );
  console.log('broadcastTransaction', res.data);
  return res.data;
}
export async function getCurrentTransactionBTC(tx: string) {
  const res: AxiosResponse<TransactionHistory> = await axios.get(
    `${config.get('API_MEMPOOL_BASE')}/tx/${tx}`,
  );
  return res.data;
}
export async function getTransactionsHistory(address: string) {
  const res = await axios.get(
    `${config.get('API_MEMPOOL_BASE')}/address/${address}/txs`,
  );
  console.log('broadcastTransaction', res.data);
  return res.data;
}
//SEND transaction EVM
export async function getGasPrice(rpc_url: string, isEVM?: string) {
  if (!rpc_url) {
    throw new Error('rpc_url is undefined');
  }
  const provider = new ethers.JsonRpcProvider(rpc_url.trim());
  const isEIP = await isEIP1559Supported(provider);
  if (!isEVM) {
    console.log('BTC');
  }
  try {
    if (isEIP) {
      const feeData = await provider.getFeeData();
      if (!feeData.gasPrice) {
        throw new Error('gasPrice is null');
      }
      const gasLimitDefault = 21000;
      const slowTotalCost = ethers.formatEther(
        BigInt(gasLimitDefault) * feeData.gasPrice,
      );
      return {
        type: 1,
        type_name: 'EIP-1559',
        feeData: {
          gasPrice: ethers.formatUnits(feeData.gasPrice, 9),
          maxFeePerGas:
            feeData.maxFeePerGas != null
              ? ethers.formatUnits(feeData.maxFeePerGas, 9)
              : null,
          maxPriorityFeePerGas:
            feeData.maxPriorityFeePerGas != null
              ? ethers.formatUnits(feeData.maxPriorityFeePerGas, 9)
              : null,
        },
        normalVersion: {
          gasPrice: ethers.formatUnits(feeData.gasPrice, 9),
          gas: slowTotalCost,
        },
      };
    } else {
      const feeData = (await provider.getFeeData()).gasPrice;
      if (!feeData) {
        throw new Error('gasPrice is null');
      }
      const gasLimitDefault = 21000;
      const slowTotalCost = ethers.formatEther(
        BigInt(gasLimitDefault) * feeData,
      );

      return {
        type: 0,
        type_name: 'Legacy',
        feeData: {},
        normalVersion: {
          gasPrice: ethers.formatUnits(feeData, 9),
          gas: slowTotalCost,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {};
  }
}
export async function isEIP1559Supported(
  provider: ethers.JsonRpcProvider,
): Promise<boolean> {
  try {
    const [block, feeData] = await Promise.all([
      provider.getBlock('latest'),
      provider.getFeeData(),
    ]);

    return (
      block?.baseFeePerGas != null && // block có baseFeePerGas
      feeData.maxFeePerGas != null && // feeData có maxFeePerGas
      feeData.maxPriorityFeePerGas != null // feeData có maxPriorityFeePerGas
    );
  } catch (err) {
    console.error('Error checking EIP-1559 support:', err);
    return false;
  }
}
export async function getGasPriceInfuraAPI(chainId: string) {
  const config = new ConfigService();
  const url = `https://gas.api.infura.io/v3/${config.get('INFURA_KEY')}/networks/${chainId}/suggestedGasFees`;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch gas fees');
    }

    const data: FeeResponse = await response.json();
    const gasLimit = 21000;
    const formatGasData = (levelData: levelFee) => {
      const maxFee = parseFloat(levelData.suggestedMaxFeePerGas);
      const maxPriorityFee = parseFloat(
        levelData.suggestedMaxPriorityFeePerGas,
      );
      const totalGwei = maxFee + maxPriorityFee;
      const totalWei = BigInt(Math.round(totalGwei * gasLimit * 1e9));
      return {
        ...levelData,
        totalCost: ethers.formatEther(totalWei),
      };
    };

    return {
      ...data,
      low: formatGasData(data.low),
      medium: formatGasData(data.medium),
      high: formatGasData(data.high),
    };
  } catch (error) {
    console.error('Error fetching gas fees:', error);
    return null;
  }
}
export async function getTransactionsHistoryEVM(
  address: string,
  chain_id: string,
  networkConfigService: NetworkConfigService,
  token_decimals?: number,
) {
  try {
    const config = networkConfigService.getNetworkConfig(chain_id);
    console.log('config: ', config);
    if (!config || !config.api_url || !config.api_key || config.status !== 1) {
      return generateResponse('fail to load network config', [], '0', 'true');
    }
    const url = `${config.api_url}&module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${config.api_key}`;
    const response = await axios.get<{
      status: string;
      message: string;
      result: EtherscanTransaction[];
    }>(url);

    if (response.data.result.length === 0) {
      return generateResponse(response.data.message, [], '1', 'false');
    }
    if (response.data.status !== '1') {
      return generateResponse(response.data.message, [], '0', 'true');
    }

    // Map Etherscan transactions to TransactionHistoryEVM
    const transactions: TransactionHistoryEVM[] = response.data.result.map(
      (tx) => {
        const convertValue = (value: string) => {
          const valueBigInt = BigInt(value);
          return (
            Number(valueBigInt) / Math.pow(10, token_decimals!)
          ).toString();
        };
        return {
          hash: tx.hash,
          from: tx.from,
          to: tx.to || '',
          value: convertValue(tx.value),
          gasUsed: convertValue(tx.gasUsed),
          gasPrice: tx.gasPrice,
          blockHash: tx.blockHash,
          blockNumber: parseInt(tx.blockNumber, 10),
          timestamp: parseInt(tx.timeStamp, 10),
        };
      },
    );
    console.log(transactions);
    return generateResponse(response.data.message, transactions, '1', 'false');
  } catch {
    return null;
  }
}
export async function getTransactionByHash(
  txHash: string,
  chain_id: string,
  networkConfigService: NetworkConfigService,
  token_decimals?: number,
  rpc_url?: string,
): Promise<TransactionHistoryEVM | null> {
  try {
    const config = networkConfigService.getNetworkConfig(chain_id);
    if (!config || !config.api_url || !config.api_key || config.status !== 1) {
      throw new Error(
        `Cấu hình mạng không hợp lệ hoặc mạng đang offline cho chain_id: ${chain_id}`,
      );
    }

    const url = `${config.api_url}&module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${config.api_key}`;

    const response = await axios.get<{
      jsonrpc: string;
      id: number;
      result: EtherscanTransaction | null;
    }>(url);

    if (!response.data.result) {
      throw new Error(`Không tìm thấy giao dịch với hash: ${txHash}`);
    }
    console.log(response);
    const tx = response.data.result;

    const receiptUrl = `${config.api_url}&module=proxy&action=eth_getTransactionReceipt&txhash=${txHash}&apikey=${config.api_key}`;
    const receiptResponse = await axios.get<{
      jsonrpc: string;
      id: number;
      result: { gasUsed: string; status: string } | null;
    }>(receiptUrl);

    const receipt = receiptResponse.data.result;
    const provider = new ethers.JsonRpcProvider(config.rpc_url);
    const blockData = await provider.getBlock(tx.blockNumber, false);
    const convertValue = (value: string) => {
      console.log(value);
      const valueBigInt = BigInt(value);
      const decimalValue = Number(valueBigInt) / Math.pow(10, token_decimals!);

      return decimalValue.toString();
    };

    const gasUsed = receipt ? BigInt(receipt.gasUsed) : BigInt(0);
    const gasPrice = BigInt(tx.gasPrice);
    const feeNetworkBigInt = gasUsed * gasPrice;
    const feeNetwork = (
      Number(feeNetworkBigInt) / Math.pow(10, token_decimals || 18)
    ).toString();
    return {
      hash: tx.hash,
      from: tx.from,
      to: tx.to || '',
      value: convertValue(tx.value),
      gasUsed: feeNetwork,
      gasPrice: tx.gasPrice,
      blockHash: tx.blockHash,
      blockNumber: parseInt(tx.blockNumber, 16),
      timestamp: blockData ? blockData.timestamp : 0,
      status: receipt
        ? receipt.status === '0x1'
          ? 'success'
          : 'failed'
        : 'unknown',
      gasLimit: tx.gas,
      nonce: parseInt(tx.nonce, 16),
    };
  } catch (error) {
    console.error(
      `Lỗi khi lấy thông tin giao dịch ${txHash} trên chain ${chain_id}:`,
      error,
    );
    return null;
  }
  // const provider = new ethers.JsonRpcProvider(rpc_url);
  // try {
  //   const tx = await provider.getTransaction(txHash);
  //   console.log('tx', tx);
  //   const receipt = await provider.getTransactionReceipt(txHash);
  //   console.log('receipt', receipt);

  //   const blockData = tx?.blockNumber
  //     ? await provider.getBlock(tx.blockNumber)
  //     : null;
  //   console.log('blockData', blockData);

  //   const result = {
  //     hash: tx?.hash || '',
  //     from: tx?.from || '',
  //     to: tx?.to || '',
  //     value: tx?.value ? ethers.formatEther(tx.value) : '0',
  //     gasUsed: receipt?.gasUsed ? receipt.gasUsed.toString() : '0',
  //     gasPrice: tx?.gasPrice ? tx.gasPrice.toString() : '0',
  //     blockHash: tx?.blockHash || '',
  //     blockNumber: tx?.blockNumber ?? 0,
  //     timestamp: blockData?.timestamp ?? 0,
  //     status: receipt
  //       ? receipt.status === 1
  //         ? 'success'
  //         : 'failed'
  //       : 'unknown',
  //     gasLimit: tx?.gasLimit ? tx.gasLimit.toString() : '0',
  //     nonce: tx?.nonce ?? 0,
  //   };

  //   console.log(result);
  //   return result;
  // } catch (error) {
  //   console.error(
  //     `Lỗi khi lấy thông tin giao dịch ${txHash} trên chain ${chain_id}:`,
  //     error,
  //   );
  //   return null;
  // }
}
