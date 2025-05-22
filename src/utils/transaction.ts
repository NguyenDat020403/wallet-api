import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ethers } from 'ethers';
import {
  FeeResponse,
  levelFee,
  TransactionRequestBTC,
  TransactionStatusRequestBTC,
} from 'src/modules/transaction/transaction.dto';
import { AddressUTXO, FeeResponseBTC } from './types';
import * as ecc from 'tiny-secp256k1';
import * as bitcoin from 'bitcoinjs-lib';
import ECPairFactory from 'ecpair';

const ECPair = ECPairFactory(ecc);
const config = new ConfigService();

// async function sendTransaction(
//   rpc_url: string,
//   contract_address?: string,
//   isEVM?: boolean,
//   privateKey?: string,
//   asset?: string,
//   to?: string,
//   amount?: string,
// ) {
//   if (isEVM) {
//     await sendTransactionEVM(
//       privateKey,
//       asset,
//       to,
//       amount,
//       contract_address,
//       rpc_url,
//     );
//   } else {
//     console.log('BITCOIn');
//     sendTransactionBitcoin(privateKey, asset, to, amount);
//   }
// }
// async function sendTransactionEVM(
//   privateKey?: string,
//   asset?: string,
//   to?: string,
//   amount?: string,
//   rpc_url?: string,
//   contract_address?: string,
// ) {
//   const config = new ConfigService();
//   if (contract_address) {
//     console.log('send token');
//   } else {
//     console.log('send native ');
//     const provider = new ethers.JsonRpcProvider(
//       rpc_url! + config.get('INFURA_KEY'),
//     );
//     const wallet = new ethers.Wallet(privateKey!, provider);
//     const tx = await wallet.sendTransaction({
//       to: to,
//       value: ethers.parseEther(amount!),
//     });
//     const receipt = await tx.wait();
//     console.log('✅ Transaction confirmed:', receipt);
//   }
// }
// function sendTransactionBitcoin(
//   privateKey?: string,
//   asset?: string,
//   to?: string,
//   amount?: string,
// ) {
//   console.log(privateKey);
//   console.log(asset);
//   console.log(to);
//   console.log(amount);
// }

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

// 2️⃣ Hàm lấy raw transaction theo TXID
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
export async function getTransactionHistory(address: string) {
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
