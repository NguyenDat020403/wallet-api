import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ImportWalletDto, SignInDto, SignUpDto } from './auth.dto';
import { generateResponse } from 'src/utils/response';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { WalletService } from '../wallet/wallet.service';
import { ListNetworkDefault } from '../network/networkDefault';
import { importWallet } from 'src/utils/wallet';
import { NetworkService } from '../network/network.services';
import { users } from 'generated/prisma';
import { BiometricService } from 'src/utils/biometricService';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private walletService: WalletService,
    private networkService: NetworkService,
    private biometricService: BiometricService,
  ) {}

  async signUp(dto: SignUpDto) {
    const isEmailExist = await this.prisma.users.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (isEmailExist) {
      return generateResponse('Email is existed', '', '200', '1');
    }
    const hash = await argon.hash(dto.password);

    const user = await this.prisma.users.create({
      data: {
        password_hash: hash,
        email: dto.email,
        username: dto.username,
        biometricPublicKey: dto.biometricPublicKey,
      },
    });
    const walletDefault = await this.walletService.createWallet(user.user_id);

    const token = await this.signToken(user.user_id, user.email || '');
    return generateResponse('success', {
      token: token,
      user,
      walletDefault,
    });
  }
  async login(dto: SignInDto) {
    let user: users | null;
    if (dto.user_id) {
      //Login by Biometric
      user = await this.prisma.users.findFirst({
        where: { user_id: dto.user_id },
      });
      if (!user || !user.biometricPublicKey) {
        return generateResponse('login failed', '', '200', '1');
      }
      const verifyPublicKey = this.biometricService.verifySignature(
        user.biometricPublicKey,
        dto.payload!,
        dto.signature!,
      );
      if (!verifyPublicKey) {
        return generateResponse(
          'The fingerprint does not match.',
          '',
          '200',
          '1',
        );
      }
    } else {
      user = await this.prisma.users.findUnique({
        where: {
          email: dto.email,
        },
      });
      if (!user) {
        return generateResponse('login failed', '', '400', 'EA01');
      }
      const pwMatches = await argon.verify(
        user.password_hash || '',
        dto.password,
      );
      if (!pwMatches) {
        return generateResponse('login failed', '', '401', 'EA02');
      }
    }
    const wallet = await this.walletService.getWalletDefault(user.user_id);
    const token = await this.signToken(user.user_id, user.email || '');
    return generateResponse(
      'success',
      {
        token: token,
        user,
        wallet,
      },
      '200',
    );
  }
  async importWallet(dto: ImportWalletDto) {
    const { mnemonic, password } = dto;
    const wallet = await importWallet(mnemonic);
    if (!wallet) {
      return generateResponse('import wallet failed', '', '200', '1');
    }
    const passwordHashed = await argon.hash(password);
    const username = 'user_' + Date.now().toString(36);

    const user = await this.prisma.users.create({
      data: {
        username: username,
        password_hash: passwordHashed,
      },
    });
    const walletNew = await this.prisma.wallets.create({
      data: {
        wallet_name: 'Default Wallet',
        wallet_balance: 0,
        wallet_address: '',
        user_id: user.user_id,
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
    await this.walletService.createManyWalletNetwork(walletNetworkList);

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

    const token = await this.signToken(user.user_id, user.email || '');
    return generateResponse('success', {
      token: token,
      user,
      walletDefault: {
        wallet: walletNew,
        walletSecret: {
          mnemonic: wallet.mnemonic,
          wallets: wallet.wallets,
        },
      },
    });
  }
  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string; refresh_token: string; exp: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const access_token = await this.jwt.signAsync(payload, {
      expiresIn: '1d',
      secret: this.config.get('JWT_SECRET'),
    });
    const refresh_token = await this.jwt.signAsync(payload, {
      secret: this.config.get('JWT_SECRET'),
      expiresIn: '7d',
    });
    return {
      access_token,
      refresh_token,
      exp: '1d',
    };
  }
  async resetNetworkDefault() {
    console.log('🟡 Bắt đầu xóa và thêm network mặc định');
    await this.prisma.networks.deleteMany({});
    console.log('✅ Đã xóa xong');

    const network = await this.prisma.networks.createMany({
      data: ListNetworkDefault,
      skipDuplicates: true,
    });

    console.log('✅ Đã thêm xong', network);

    return {
      data: network,
      status: '200',
    };
  }
}
