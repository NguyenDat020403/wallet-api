import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy';
import { AuthController } from './auth.controller';
import { BiometricService } from 'src/utils/biometricService';
import { WalletModule } from '../wallet/wallet.module';
import { NetworkModule } from '../network/network.module';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [JwtModule.register({}), WalletModule, NetworkModule, TokenModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, BiometricService],
})
export class AuthModule {}
