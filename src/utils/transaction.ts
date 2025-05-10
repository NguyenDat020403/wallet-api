// import { ConfigService } from '@nestjs/config';
// import { ethers } from 'ethers';

import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
import { FeeResponse, levelFee } from 'src/modules/transaction/transaction.dto';

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
