/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, UseGuards, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  createNewWalletAccount,
  getAccountFromMnemonic,
  getBalanceByNetwork,
} from 'src/utils/wallet';
import { GetWalletRequest, ImportWalletRequest } from './wallet.dto';
import { Decimal } from 'generated/prisma/runtime/library';
@UseGuards(JwtGuard)
@Injectable()
export class WalletService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async createWallet(userId: string) {
    const walletAccount = createNewWalletAccount();

    const wallet = await this.prisma.wallets.create({
      data: {
        wallet_name: 'Default Wallet',
        wallet_balance: 0,
        wallet_address: walletAccount.address,
        user_id: userId,
      },
    });

    //FIX: add list Network Default
    const network = await this.prisma.networks.findMany({
      where: {
        is_default_network: true,
      },
    });
    const networkIds = network.map((n) => n.network_id);
    const walletNetworks = await this.prisma.wallet_networks.createMany({
      data: networkIds.map((networkId) => ({
        wallet_id: wallet.wallet_id,
        network_id: networkId,
        address: walletAccount.address,
      })),
    });

    console.log(walletNetworks);
    return {
      wallet: wallet,
      walletSecret: walletAccount,
      walletNetwork: walletNetworks,
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
        user_id: userId,
        wallet_id: dto.wallet_id,
      },
      include: {
        wallet_network_tokens: true,
      },
    });
    if (!wallet) throw new BadRequestException('Wallet not found');
    const { wallet_network_tokens, ...sanitizedWallet } = wallet;

    const token_networkIds = wallet_network_tokens
      .map((wn) => wn.token_network_id)
      .filter((id): id is string => id !== null);

    const tokenNetworks = await this.prisma.token_networks.findMany({
      where: {
        token_network_id: {
          in: token_networkIds,
        },
      },
      include: {
        tokens: true,
        networks: true,
      },
    });
    console.log(tokenNetworks);
    const enrichedTokens = await Promise.all(
      tokenNetworks.map(async (tn) => {
        const balanceToken = await getBalanceByNetwork(
          tn.networks!,
          wallet.wallet_address,
          tn.contract_address,
          tn.tokens?.decimals,
        );
        return {
          ...tn.tokens,
          network: tn.networks,
          balanceToken,
        };
      }),
    );

    return {
      ...sanitizedWallet,
      token_list: enrichedTokens,
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
}
