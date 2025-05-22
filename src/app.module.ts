import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { NetworkModule } from './modules/network/network.module';
import { TokenModule } from './modules/token/token.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { NotificationModule } from './modules/notification/notification.module';
import path from 'path';
import { CacheModule } from '@nestjs/cache-manager';

const envFile =
  process.env.NODE_ENV && process.env.NODE_ENV !== 'local'
    ? `.env.${process.env.NODE_ENV}`
    : '.env'; // Nếu NODE_ENV là 'local' hoặc undefined, dùng .env
@Module({
  imports: [
    AuthModule,
    UserModule,
    WalletModule,
    TokenModule,
    PrismaModule,
    TransactionModule,
    ConfigModule.forRoot({
      envFilePath: path.resolve(__dirname, '..', envFile),
      isGlobal: true,
    }),
    NotificationModule,
    NetworkModule,
    CacheModule.register({
      ttl: 60 * 60 * 24, // 24h
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
