import { BadRequestException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SignInDto, SignUpDto } from './auth.dto';
import { generateResponse } from 'src/utils/response';
import { PrismaService } from 'src/prisma/prisma.service';
import { ERROR_MAP } from 'src/constants/errorMap';
import { WalletService } from '../wallet/wallet.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private walletService: WalletService,
  ) {}

  async signUp(dto: SignUpDto) {
    const isEmailExist = await this.prisma.users.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (isEmailExist) {
      throw new BadRequestException(ERROR_MAP.EMAIL_ALREADY_EXIST);
    }
    const hash = await argon.hash(dto.password);

    const user = await this.prisma.users.create({
      data: {
        password_hash: hash,
        email: dto.email,
        username: dto.username,
        avatar: dto.avatar,
      },
    });

    const walletDefault = await this.walletService.createWallet(user.user_id);

    const token = await this.signToken(user.user_id, user.email || '');
    return generateResponse('success', {
      token: token,
      user,
      walletSecret: walletDefault.walletSecret,
    });
  }
  async login(dto: SignInDto) {
    const user = await this.prisma.users.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);
    }
    const pwMatches = await argon.verify(
      user.password_hash || '',
      dto.password,
    );
    if (!pwMatches) {
      throw new BadRequestException(ERROR_MAP.INCORRECT_PASSWORD);
    }
    const token = await this.signToken(user.user_id, user.email || '');

    //send back the user
    return generateResponse('success', {
      token: token,
      user,
    });
  }
  // async importWallet(dto: ImportWalletDto) {
  //   const { mnemonic, password } = dto;
  //   const existUserSecret = await this.prisma.user_secret.findUnique({
  //     where: {
  //       mnemonic,
  //     },
  //     include: {
  //       user_user_secret_useridTouser: true,
  //     },
  //   });
  //   console.log(existUserSecret?.user_user_secret_useridTouser?.email);

  //   if (existUserSecret) {
  //     const newPasswordHash = await argon.hash(dto.password);
  //     const userUpdate = await this.prisma.user.update({
  //       where: {
  //         email: existUserSecret.user_user_secret_useridTouser?.email || '',
  //       },
  //       data: {
  //         password: newPasswordHash,
  //       },
  //     });
  //     const token = await this.signToken(userUpdate.id, userUpdate.email || '');
  //     return generateResponse('success', {
  //       token: token,
  //       userUpdate,
  //     });
  //   }
  //   // Dont have secret -> create new user
  //   const walletAccount = getAccountFromMnemonic(mnemonic);
  //   const passwordHashed = await argon.hash(password);
  //   const user = await this.prisma.user.create({
  //     data: {
  //       password: passwordHashed,
  //       address: walletAccount.address,
  //     },
  //   });
  //   await this.prisma.user_secret.create({
  //     data: {
  //       userid: user.id,
  //       public_key: walletAccount.address,
  //       private_key: walletAccount.private_key,
  //       mnemonic: walletAccount.mnemonic,
  //     },
  //   });
  //   const token = await this.signToken(user.id, user.email || '');
  //   return generateResponse('success', {
  //     token: token,
  //     address: walletAccount.address,
  //     mnemonic: mnemonic,
  //   });
  // }
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
}
