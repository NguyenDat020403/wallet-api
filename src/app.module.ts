import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
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
import { CoinModule } from './modules/coinpaprika/coinpaprika.module';
import { PostModule } from './modules/post/post.module';
import { SupabaseModule } from './modules/supabase/supabase.module';
import { FirebaseModule } from './modules/firebase/firebase.module';
import { SwapModule } from './modules/swap/swap.module';
import { MessageModule } from './modules/message/message.module';

const envFile =
  process.env.NODE_ENV && process.env.NODE_ENV !== 'local'
    ? `.env.${process.env.NODE_ENV}`
    : '.env'; // Nếu NODE_ENV là 'local' hoặc undefined, dùng .env
@Module({
  imports: [
    AuthModule,
    UserModule,
    CoinModule,
    PostModule,
    SupabaseModule,
    FirebaseModule,
    SwapModule,
    WalletModule,
    MessageModule,
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
