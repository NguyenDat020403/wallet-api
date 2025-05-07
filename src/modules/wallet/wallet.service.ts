/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, UseGuards, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWalletETH, getAccountFromMnemonic } from 'src/utils/wallet';
import { GetWalletRequest, ImportWalletRequest } from './wallet.dto';
import { Decimal } from 'generated/prisma/runtime/library';
import { NetworkService } from '../network/network.services';
import { TokenService } from '../token/token.service';
@UseGuards(JwtGuard)
@Injectable()
export class WalletService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private networkService: NetworkService,
    private tokenService: TokenService,
  ) {}
  async createWallet(userId: string) {
    const walletMulti = await CreateWalletETH();
    const wallet = await this.prisma.wallets.create({
      data: {
        wallet_name: 'Default Wallet',
        wallet_balance: 0,
        wallet_address: '',
        user_id: userId,
      },
    });

    //FIX: add list Network Default
    const network = await this.networkService.findDefaultNetwork();

    const walletNetworkList = network.map((n) => {
      let address;
      if (n.symbol === 'BTC') {
        address = walletMulti.wallets[1].address;
      } else {
        address = walletMulti.wallets[0].address;
      }
      return {
        address: address,
        wallet_id: wallet.wallet_id,
        network_id: n.network_id,
      };
    });
    console.log(walletNetworkList);
    await this.createManyWalletNetwork(walletNetworkList);

    //CREATE WALLET_TOKEN_NETWORK
    // NETWORK_ID List -> list TOKEN_NETWORK
    // TOKEN_NETWORK List + wallet_ID -> WalletTokenNetwork
    const tokenNetworks = await Promise.all(
      network.map(async (n) => {
        return await this.prisma.token_networks.findFirst({
          where: {
            network_id: n.network_id,
          },
        });
      }),
    );
    console.log(tokenNetworks);
    await Promise.all(
      tokenNetworks.map(async (tokenNetwork) => {
        return await this.prisma.wallet_network_tokens.create({
          data: {
            token_network_id: tokenNetwork?.token_network_id,
            wallet_id: wallet.wallet_id,
          },
        });
      }),
    );
    return {
      wallet: wallet,
      walletSecret: {
        mnemonic: walletMulti.mnemonic,
        wallets: walletMulti.wallets,
      },
      // walletTokenNetwork: walletTokenNetwork,
    };
  }
  async getWalletDefault(userId: string) {
    const wallet = await this.prisma.wallets.findFirst({
      where: {
        user_id: userId,
      },
    });
    if (!wallet) throw new BadRequestException('Wallet not found');
    return wallet;
  }
  async getWallet(userId: string, dto: GetWalletRequest) {
    const wallet = await this.prisma.wallets.findFirst({
      where: {
        wallet_id: dto.wallet_id,
      },
    });
    const tokens = await this.tokenService.getTokens(dto.wallet_id);

    return {
      tokens,
      wallet,
    };
  }
  async importWallet(userId: string, dto: ImportWalletRequest) {
    const walletAccount = await getAccountFromMnemonic(dto.mnemonic);
    const walletAddressExisted = await this.prisma.wallets.findFirst({
      where: {
        wallet_address: walletAccount.address,
      },
    });
    if (walletAddressExisted) {
      const walletBalanceDecimal = new Decimal(
        walletAccount.balance.toString(),
      );
      const result = await this.prisma.wallets.update({
        where: {
          wallet_id: walletAddressExisted.wallet_id,
        },
        data: {
          wallet_balance: walletBalanceDecimal,
        },
      });
      if (result) return result;
    }
    const wallet = await this.prisma.wallets.create({
      data: {
        wallet_name: 'Imported Wallet',
        wallet_balance: walletAccount.balance.toString(),
        wallet_address: walletAccount.address,
        user_id: userId,
      },
    });
    return wallet;
  }

  async getUserWallets(userId: string) {
    const wallet = await this.prisma.wallets.findMany({
      where: {
        user_id: userId,
      },
    });
    return wallet;
  }
  async getUserWalletNetwork(wallet_id) {
    const walletNetworks = await this.prisma.wallet_networks.findMany({
      where: {
        wallet_id: wallet_id,
      },
      include: {
        networks: true,
      },
    });
    return walletNetworks;
  }
  async createManyWalletNetwork(walletNetworkList) {
    const walletNetworks = await this.prisma.wallet_networks.createMany({
      data: walletNetworkList,
    });
    return walletNetworks;
  }
}
