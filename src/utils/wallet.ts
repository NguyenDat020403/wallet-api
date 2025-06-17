import BIP32Factory from 'bip32';
import * as bip39 from 'bip39';
import * as ecc from 'tiny-secp256k1';
import { BigNumberish, ethers } from 'ethers';
import * as bitcoin from 'bitcoinjs-lib';
import axios, { AxiosResponse } from 'axios';
import { BalanceBTC } from './types';
import { ConfigService } from '@nestjs/config';

export async function CreateWallet() {
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

  const ethWalletPrivateKeyHex = '0x' + ethWalletPrivateKey.toString('hex');
  const ethWallet = new ethers.Wallet(ethWalletPrivateKeyHex);
  //---------------------------------------------------------------------------
  const rootBTC = bip32.fromSeed(seed, bitcoin.networks.testnet);
  const btcPath = "m/84'/0'/0'/0/0";
  //m/44'/0'/0'/0/0 Legacy (P2PKH)	1...
  //m/49'/0'/0'/0/0 SegWit Compatibility (P2SH)	3...
  //m/84'/0'/0'/0/0 Native SegWit (bech32) bc1...
  //m/86'/0'/0'/0/0  Taproot (bech32m)	bc1p...
  const btcNode = rootBTC.derivePath(btcPath);
  const xpriv = btcNode.toBase58();
  const xpub = btcNode.neutered().toBase58();

  const keyPair = bip32.fromPrivateKey(
    btcNode.privateKey!,
    btcNode.chainCode,
    bitcoin.networks.testnet,
  );
  const wif = keyPair.toWIF();
  const btcWallet = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(keyPair.publicKey),
    network: bitcoin.networks.testnet,
  });

  console.log('xpriv', xpriv);
  console.log('xpub', xpub);
  console.log('wif', wif);
  console.log('privateKey', Buffer.from(btcNode.privateKey!));
  console.log('chainCode', Buffer.from(btcNode.chainCode));
  console.log('publicKey', Buffer.from(keyPair.publicKey));
  console.log('Bitcoin Address:', btcWallet.address);
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
        xpriv: xpriv,
        xpub: xpub,
        wif: wif,
        address: btcWallet.address,
        privateKey: Buffer.from(btcNode.privateKey!).toString('hex'),
        publickey: Buffer.from(keyPair.publicKey).toString('hex'),
      },
    ],
  };
}

export async function importWallet(mnemonic: string) {
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const bip32 = BIP32Factory(ecc);
  const root = bip32.fromSeed(seed);
  //Tạo Ethereum
  const ethPath = "m/44'/60'/0'/0/0"; // BIP44 path cho Ethereum
  const ethNode = root.derivePath(ethPath);
  const ethWalletPrivateKey: Buffer<ArrayBuffer> = Buffer.from(
    ethNode.privateKey as Uint8Array,
  );
  const ethWalletPublicKey = Buffer.from(ethNode.publicKey).toString('hex');
  const privateKeyHex = '0x' + ethWalletPrivateKey.toString('hex');
  const ethWallet = new ethers.Wallet(privateKeyHex);
  //Bitcoin Testnet
  const btcPath = "m/84'/1'/0'/0/0";
  const rootBTC = bip32.fromSeed(seed, bitcoin.networks.testnet);
  const btcNode = rootBTC.derivePath(btcPath);
  const xpriv = btcNode.toBase58();
  const xpub = btcNode.neutered().toBase58();

  const keyPair = bip32.fromPrivateKey(
    btcNode.privateKey!,
    btcNode.chainCode,
    bitcoin.networks.testnet,
  );
  const wif = keyPair.toWIF();
  const btcWallet = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(keyPair.publicKey),
    network: bitcoin.networks.testnet,
  });

  return {
    mnemonic: mnemonic,
    wallets: [
      {
        address: ethWallet.address,
        privateKey: privateKeyHex,
        publickey: ethWalletPublicKey,
      },
      {
        xpriv: xpriv,
        xpub: xpub,
        wif: wif,
        address: btcWallet.address,
        privateKey: Buffer.from(btcNode.privateKey!).toString('hex'),
        publickey: Buffer.from(keyPair.publicKey).toString('hex'),
      },
    ],
  };
}

export async function getBalanceV1(
  address: string,
  networkSymbol: string | undefined,
  network_rpcURL: string | undefined,
  contract_address?: string,
  decimals?: number,
): Promise<string> {
  const config = new ConfigService();
  if (networkSymbol !== 'BTC') {
    const provider = new ethers.JsonRpcProvider(network_rpcURL);
    if (!contract_address) {
      const balanceBigInt = await provider.getBalance(address);
      return ethers.formatEther(balanceBigInt);
    } else {
      const ERC20_ABI = [
        'function balanceOf(address owner) view returns (uint256)',
      ];
      const erc20 = new ethers.Contract(contract_address, ERC20_ABI, provider);

      const balance = await erc20.balanceOf(address);

      return ethers.formatUnits(balance as BigNumberish, decimals);
    }
  } else if (networkSymbol === 'BTC') {
    // const res: AxiosResponse<BalanceBTC> = await axios.get(
    //   `${config.get('API_MEMPOOL_BASE')}/address/${address}`,
    // );
    const res: AxiosResponse<BalanceBTC> = await axios.get(
      `https://blockstream.info/testnet/api/address/${address}`,
    );

    if (res.data) {
      const balance =
        res.data.chain_stats.funded_txo_sum -
        res.data.chain_stats.spent_txo_sum;
      console.log((balance / 1e8).toFixed(8));
      return (balance / 1e8).toFixed(8);
    } else {
      return '0';
    }
  }

  throw new Error('Unsupported network');
}
