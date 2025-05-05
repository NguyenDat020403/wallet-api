import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy';
import { AuthController } from './auth.controller';
import { WalletService } from '../wallet/wallet.service';
import { NetworkService } from '../network/network.services';
import { TokenService } from '../token/token.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    WalletService,
    NetworkService,
    TokenService,
  ],
})
export class AuthModule {}
