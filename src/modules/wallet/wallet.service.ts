/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, UseGuards, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateWallet, importWallet } from 'src/utils/wallet';
import { GetWalletRequest, ImportWalletDto } from './wallet.dto';
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
    const walletMulti = await CreateWallet();
    const wallet_name = this.$generateRandomWalletName();
    const wallet = await this.prisma.wallets.create({
      data: {
        wallet_name: wallet_name,
        wallet_balance: 0,
        wallet_address: '',
        user_id: userId,
        thumbnail: `https://api.dicebear.com/7.x/shapes/png?seed=${wallet_name}`,
      },
    });

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
    await this.createManyWalletNetwork(walletNetworkList);

    //CREATE WALLET_TOKEN_NETWORK
    // NETWORK_ID List -> list TOKEN_NETWORK
    // TOKEN_NETWORK List + wallet_ID -> WalletTokenNetwork
    const networkIds = network.map((n) => n.network_id);

    const tokenNetworks = await this.prisma.token_networks.findMany({
      where: {
        network_id: {
          in: networkIds,
        },
      },
    });

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
    };
  }

  async deleteWallet(userId: string, wallet_id: string) {
    const wallet = await this.prisma.wallets.delete({
      where: { wallet_id: wallet_id, user_id: userId },
    });
    return wallet;
  }
  async updateWallet(userId: string, wallet_id: string, wallet_name: string) {
    const wallet = await this.prisma.wallets.update({
      where: {
        wallet_id: wallet_id,
        user_id: userId,
      },
      data: {
        wallet_name: wallet_name,
      },
    });
    return wallet;
  }

  async importWallet(userId: string, dto: ImportWalletDto) {
    const wallet = await importWallet(dto.mnemonic);
    const wallet_name = this.$generateRandomWalletName();
    const walletNew = await this.prisma.wallets.create({
      data: {
        wallet_name: wallet_name,
        wallet_balance: 0,
        wallet_address: '',
        user_id: userId,
        thumbnail: `https://api.dicebear.com/7.x/shapes/png?seed=ImportWallet`,
      },
    });
    const network = await this.networkService.findDefaultNetwork();

    const walletNetworkList = network.map((n) => {
      let address;
      if (n.symbol === 'BTC') {
        address = wallet.wallets[1].address;
      } else {
        address = wallet.wallets[0].address;
      }
      return {
        address: address,
        wallet_id: walletNew.wallet_id,
        network_id: n.network_id,
      };
    });
    await this.createManyWalletNetwork(walletNetworkList);

    const networkIds = network.map((n) => n.network_id);

    const tokenNetworks = await this.prisma.token_networks.findMany({
      where: {
        network_id: {
          in: networkIds,
        },
      },
    });

    await Promise.all(
      tokenNetworks.map(async (tokenNetwork) => {
        return await this.prisma.wallet_network_tokens.create({
          data: {
            token_network_id: tokenNetwork?.token_network_id,
            wallet_id: walletNew.wallet_id,
          },
        });
      }),
    );

    return {
      wallet: walletNew,
      walletSecret: {
        mnemonic: wallet.mnemonic,
        wallets: wallet.wallets,
      },
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
    const tokens = (await this.tokenService.getTokens(dto.wallet_id)).sort(
      (a, b) => Number(b.balance) - Number(a.balance),
    );
    const tokenAvailableBalance = tokens.filter(
      (t) =>
        t?.balance !== undefined &&
        parseFloat(t?.balance) !== 0 &&
        t.network?.is_testnet === false,
    );
    console.log('tokenAvailableBalance', tokenAvailableBalance);
    const totalBalance = tokenAvailableBalance.reduce((sum, token) => {
      return (
        sum +
        Number(token?.balance) *
          (token.market_data ? Number(token.market_data.price) : 0)
      );
    }, 0);
    await this.prisma.wallets.update({
      where: {
        wallet_id: wallet?.wallet_id,
      },
      data: {
        wallet_balance: totalBalance ? totalBalance : 0,
      },
    });
    // if (Decimal(totalBalance) !== wallet?.wallet_balance) {
    //   wallet = await this.prisma.wallets.update({
    //     where: { wallet_id: wallet?.wallet_id },
    //     data: {
    //       wallet_balance: totalBalance,
    //     },
    //   });
    // }
    return {
      tokens,
      wallet: {
        ...wallet,
        wallet_balance: totalBalance,
      },
    };
  }
  async getUserWallets(userId: string) {
    const wallet = await this.prisma.wallets.findMany({
      where: {
        user_id: userId,
      },
    });

    return wallet;
  }
  async getUserWalletNetwork(user_id: string) {
    const wallets = await this.prisma.wallets.findMany({
      where: {
        user_id: user_id,
      },
    });
    if (!wallets) {
      return {
        message: 'Not found wallet',
        error: '1',
        data: '',
        status: '200',
      };
    }

    const walletNetworks = await Promise.all(
      wallets.map(async (w) => {
        const walletNetwork = await this.prisma.wallet_networks.findMany({
          where: {
            wallet_id: w.wallet_id,
          },
          include: {
            networks: true,
          },
        });

        return {
          wallet: w,
          walletNetwork: walletNetwork,
        };
      }),
    );
    return {
      message: 'success',
      error: '0',
      data: walletNetworks,
      status: '200',
    };
  }
  async createManyWalletNetwork(walletNetworkList) {
    const walletNetworks = await this.prisma.wallet_networks.createMany({
      data: walletNetworkList,
    });
    return walletNetworks;
  }

  async $createWallet(
    userId: string,
    btcAddress: string,
    othersAddress: string,
  ) {
    const wallet = await this.prisma.wallets.create({
      data: {
        wallet_name: 'Default Wallet',
        wallet_balance: 0,
        wallet_address: '',
        user_id: userId,
      },
    });
    const network = await this.networkService.findDefaultNetwork();
    const walletNetworkList = network.map((n) => {
      let address;
      if (n.symbol === 'BTC') {
        address = btcAddress;
      } else {
        address = othersAddress;
      }
      return {
        address: address,
        wallet_id: wallet.wallet_id,
        network_id: n.network_id,
      };
    });
    console.log(walletNetworkList);
    await this.createManyWalletNetwork(walletNetworkList);
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
    return wallet;
  }

  async findWalletIdByAddress(address: string) {
    const wallet = await this.prisma.wallet_networks.findFirst({
      where: { address: address },
    });
    if (!wallet) {
      return null;
    }
    return wallet.wallet_id;
  }
  $generateRandomWalletName() {
    const prefix = 'Wallet';
    const randomNumber = Math.floor(100 + Math.random() * 900); // 100–999
    return `${prefix} ${randomNumber}`;
  }
  async findWalletIdByUserId(userId: string) {
    const wallet = await this.prisma.wallets.findFirst({
      where: {
        user_id: userId,
      },
    });
    if (!wallet) {
      return null;
    }
    return wallet.wallet_id;
  }
}
