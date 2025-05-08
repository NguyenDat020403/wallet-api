import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { NetworkModule } from './modules/network/network.module';
import { TokenModule } from './modules/token/token.module';
import { TransactionModule } from './modules/transaction/transaction.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    WalletModule,
    TokenModule,
    PrismaModule,
    TransactionModule,
    NetworkModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
