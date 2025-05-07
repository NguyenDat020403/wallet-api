import BIP32Factory from 'bip32';
import * as bip39 from 'bip39';
import * as ecc from 'tiny-secp256k1';
import { ethers } from 'ethers';
import { networks } from 'generated/prisma';
import * as bitcoin from 'bitcoinjs-lib';
import { ConfigService } from '@nestjs/config';

export function generateRandomMnemonic() {
  const mnemonic = bip39.generateMnemonic();
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

export async function CreateWalletETH() {
  const mnemonic = bip39.generateMnemonic();
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const bip32 = BIP32Factory(ecc);
  const root = bip32.fromSeed(seed);

  //---------------------------------------------------------------------------
  const ethPath = "m/44'/60'/0'/0/0";
  const ethNode = root.derivePath(ethPath);
  const ethWalletPrivateKey: Buffer<ArrayBuffer> = Buffer.from(
    ethNode.privateKey as Uint8Array,
  );
  const ethWalletPublicKey = Buffer.from(ethNode.publicKey).toString('hex');
  const provider = new ethers.JsonRpcProvider(
    'https://sepolia.infura.io/v3/44b62ee0153941579e73f1d784472ad1',
  );
  const ethWalletPrivateKeyHex = '0x' + ethWalletPrivateKey.toString('hex');
  const ethWallet = new ethers.Wallet(ethWalletPrivateKeyHex, provider);
  //---------------------------------------------------------------------------
  const btcPath = "m/44'/1'/0'/0/0";
  const btcNode = root.derivePath(btcPath);
  const privateKeyHexBitcoin = Buffer.from(btcNode.privateKey!).toString('hex');
  const publicKeyBuffer = Buffer.from(btcNode.publicKey);
  const publicKeyBTCHex = publicKeyBuffer.toString('hex');
  const btcWallet = bitcoin.payments.p2pkh({
    pubkey: publicKeyBuffer,
    network: bitcoin.networks.testnet,
  });
  console.log('Private Key (hex):', privateKeyHexBitcoin);
  console.log('Bitcoin Address:', btcWallet.address);
  console.log('Bitcoin PublicKey :', publicKeyBTCHex);
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  console.log('Private Key (hex): ', ethWalletPrivateKeyHex);
  console.log('ETH address: ', ethWallet.address);
  console.log('ETH publicKey: ', ethWalletPublicKey);

  return {
    mnemonic: mnemonic,
    wallets: [
      {
        address: ethWallet.address,
        privateKey: ethWalletPrivateKeyHex,
        publickey: ethWalletPublicKey,
      },
      {
        address: btcWallet.address,
        privateKey: privateKeyHexBitcoin,
        publickey: publicKeyBTCHex,
      },
    ],
  };
}

export async function getBalanceV1(
  address: string,
  networkSymbol: string | undefined,
  network_rpcURL: string | undefined,
): Promise<string> {
  const config = new ConfigService();
  if (networkSymbol !== 'BTC') {
    console.log(network_rpcURL);
    console.log(network_rpcURL! + config.get('INFURA_KEY'));
    const provider = new ethers.JsonRpcProvider(
      network_rpcURL! + config.get('INFURA_KEY'),
    );
    const balanceBigInt = await provider.getBalance(address);
    return ethers.formatEther(balanceBigInt);
  } else if (networkSymbol === 'BTC') {
    const res = await fetch(
      `https://blockstream.info/testnet/api/address/${address}`,
    );
    const data: { chain_stats: { funded_txo_sum; spent_txo_sum } } =
      await res.json();
    const balance =
      data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum;
    console.log((balance / 1e8).toFixed(8));
    return (balance / 1e8).toFixed(8);
  }

  throw new Error('Unsupported network');
}
