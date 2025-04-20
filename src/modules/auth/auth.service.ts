import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { ImportWalletDto, SignInDto, SignUpDto } from './auth.dto';
import {
  generateRandomMnemonic,
  getAccountFromMnemonic,
} from 'src/utils/wallet';
import { generateResponse } from 'src/utils/response';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signUp(dto: SignUpDto) {
    const isEmailExist = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (isEmailExist) {
      throw new ForbiddenException('Email Existed');
    }
    //generate mnemonic
    const mnemonic = generateRandomMnemonic();
    //generate hash password
    const hash = await argon.hash(dto.password);
    const walletAccount = getAccountFromMnemonic(mnemonic);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        password: hash,

        address: walletAccount.address,
      },
    });
    await this.prisma.user_secret.create({
      data: {
        userid: user.id,
        public_key: walletAccount.public_key.toString(),
        private_key: walletAccount.private_key,
        mnemonic: mnemonic,
      },
    });
    const token = await this.signToken(user.id, user.email || '');

    // save the new user
    return generateResponse('success', {
      token: token,
      address: walletAccount.address,
      mnemonic: mnemonic,
    });
  }
  async login(dto: SignInDto) {
    //find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    //if not exist throw error
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }
    //compare password
    const pwMatches = await argon.verify(user.password || '', dto.password);
    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }
    const token = await this.signToken(user.id, user.email || '');

    //send back the user
    return generateResponse('success', {
      token: token,
      user,
    });
  }
  async importWallet(dto: ImportWalletDto) {
    const { mnemonic, password } = dto;
    const existUserSecret = await this.prisma.user_secret.findUnique({
      where: {
        mnemonic,
      },
      include: {
        user_user_secret_useridTouser: true,
      },
    });
    console.log(existUserSecret?.user_user_secret_useridTouser?.email);

    if (existUserSecret) {
      const newPasswordHash = await argon.hash(dto.password);
      const userUpdate = await this.prisma.user.update({
        where: {
          email: existUserSecret.user_user_secret_useridTouser?.email || '',
        },
        data: {
          password: newPasswordHash,
        },
      });
      const token = await this.signToken(userUpdate.id, userUpdate.email || '');
      return generateResponse('success', {
        token: token,
        userUpdate,
      });
    }
    // Dont have secret -> create new user
    const walletAccount = getAccountFromMnemonic(mnemonic);
    const passwordHashed = await argon.hash(password);
    const user = await this.prisma.user.create({
      data: {
        password: passwordHashed,
        address: walletAccount.address,
      },
    });
    await this.prisma.user_secret.create({
      data: {
        userid: user.id,
        public_key: walletAccount.public_key.toString(),
        private_key: walletAccount.private_key,
        mnemonic: mnemonic,
      },
    });
    const token = await this.signToken(user.id, user.email || '');
    return generateResponse('success', {
      token: token,
      address: walletAccount.address,
      mnemonic: mnemonic,
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
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });
    const refresh_token = await this.jwt.signAsync(payload, {
      secret: this.config.get('JWT_SECRET'),
      expiresIn: '7d',
    });
    return {
      access_token,
      refresh_token,
      exp: '15m',
    };
  }
}
