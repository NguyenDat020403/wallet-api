// import { ConfigService } from '@nestjs/config';
// import { ethers } from 'ethers';

import { ethers } from 'ethers';

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

export async function getGasPrice(rpc_url: string) {
  if (!rpc_url) {
    throw new Error('rpc_url is undefined');
  }
  const provider = new ethers.JsonRpcProvider(
    `${rpc_url}44b62ee0153941579e73f1d784472ad1`,
  );

  const feeData = await provider.getFeeData();

  const gasLimitDefault = 21000;
  const slowTotalCost = ethers.formatEther(
    BigInt(gasLimitDefault) * feeData.gasPrice!,
  );

  console.log(slowTotalCost);
  return {
    feeData: {
      gasPrice: ethers.formatUnits(feeData.gasPrice!, 9),
      maxFeePerGas: ethers.formatUnits(feeData.maxFeePerGas!, 9),
      maxPriorityFeePerGas: ethers.formatUnits(
        feeData.maxPriorityFeePerGas!,
        9,
      ),
    },
    slowVersion: {
      gasPrice: ethers.formatUnits(feeData.gasPrice!, 9),
      gas: slowTotalCost,
    },
  };
}
