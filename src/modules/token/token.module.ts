import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';
import { JwtStrategy } from 'src/auth/strategy';
import { NetworkService } from '../network/network.services';

@Module({
  imports: [JwtModule.register({})],
  controllers: [TokenController],
  providers: [TokenService, NetworkService, JwtStrategy],
})
export class TokenModule {}
