import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';
import { NetworkModule } from '../network/network.module';
import { CoinModule } from '../coinpaprika/coinpaprika.module';

@Module({
  imports: [
    JwtModule.register({}),
    forwardRef(() => NetworkModule),
    CoinModule,
  ],
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
