import * as bip39 from 'bip39';

import { ethers } from 'ethers';
import { networks } from 'generated/prisma';
export function generateRandomMnemonic() {
  const mnemonic = bip39.generateMnemonic();
  console.log(mnemonic);
  return mnemonic;
}
export function createNewWalletAccount() {
  const account = ethers.Wallet.createRandom();

  const provider = new ethers.InfuraProvider(
    'mainnet',
    '44b62ee0153941579e73f1d784472ad1',
  );

  const walletWithProvider = account.connect(provider);

  const privateKey = walletWithProvider.privateKey;
  const address = walletWithProvider.address;
  const mnemonics = walletWithProvider.mnemonic?.phrase || 'Some thing wrong';
  return {
    private_key: privateKey,
    mnemonic: mnemonics,
    address,
  };
}

export async function getBalance(address: string) {
  const provider = new ethers.InfuraProvider(
    // 'sepolia',
    'mainnet',
    '44b62ee0153941579e73f1d784472ad1',
  );
  const balance = await provider.getBalance(address);
  return balance;
}

export async function getBalanceByNetwork(
  network: networks,
  address: string,
  contract_address?: string,
  decimals?: number,
) {
  const provider = new ethers.JsonRpcProvider(network.rpc_url);

  if (contract_address) {
    try {
      const erc20Abi = ['function balanceOf(address) view returns (uint256)'];

      const tokenContract = new ethers.Contract(
        contract_address,
        erc20Abi,
        provider,
      );
      try {
        const balance = await tokenContract.balanceOf(address);
        if (balance === undefined) {
          throw new Error('Failed to get token balance');
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const formattedBalance = ethers.formatUnits(balance, decimals);
        return formattedBalance;
      } catch (error) {
        console.error(
          `Error getting balance for token ${contract_address}:`,
          error,
        );
        throw new Error(
          `Failed to get token balance: ${error instanceof Error ? error.message : 'Unknown error'}`,
        );
      }
    } catch (error) {
      console.error(
        `Error getting ERC20 balance for ${contract_address}:`,
        error,
      );
      throw new Error(
        `Failed to get ERC20 balance: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  try {
    const balance = await provider.getBalance(address);
    return ethers.formatEther(balance);
  } catch (error) {
    console.error(`Error getting native balance for ${address}:`, error);
    throw new Error(
      `Failed to get native balance: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
}
export async function getAccountFromMnemonic(mnemonic: string) {
  const wallet = ethers.Wallet.fromPhrase(mnemonic);
  const privateKey = wallet.privateKey;
  const address = wallet.address;
  const mnemonics = wallet.mnemonic?.phrase || 'Some thing wrong';
  const balance = await getBalance(address);
  return {
    private_key: privateKey,
    mnemonic: mnemonics,
    address,
    balance,
  };
}
