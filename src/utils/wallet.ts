import * as bip39 from 'bip39';
import { HDKey } from 'ethereum-cryptography/hdkey';
import {
  privateKeyToAddress,
  privateKeyToHex,
  privateKeyToPublic,
} from '@stacks/transactions';

export function generateRandomMnemonic() {
  const mnemonic = bip39.generateMnemonic();
  console.log(mnemonic);
  return mnemonic;
}
export function getAccountFromMnemonic(mnemonic: string) {
  const seed = bip39.mnemonicToSeedSync(mnemonic);

  const hdWallet = HDKey.fromMasterSeed(seed);

  const privateKey = hdWallet.privateKey;
  const publicKey = privateKeyToPublic(privateKey || '');
  const address = privateKeyToAddress(privateKey || '');
  const privateKeyHex = privateKeyToHex(privateKey || '');

  return {
    private_key: privateKeyHex,
    public_key: publicKey,
    address,
  };
}
