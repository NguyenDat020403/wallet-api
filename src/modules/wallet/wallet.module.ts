import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { NetworkService } from '../network/network.services';
import { TokenService } from '../token/token.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [WalletController],
  providers: [WalletService, JwtStrategy, NetworkService, TokenService],
})
export class WalletModule {}
