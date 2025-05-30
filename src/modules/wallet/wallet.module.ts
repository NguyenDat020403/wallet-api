import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { NetworkModule } from '../network/network.module';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [
    JwtModule.register({}),
    forwardRef(() => NetworkModule),
    forwardRef(() => TokenModule),
  ],
  controllers: [WalletController],
  providers: [WalletService],
  exports: [WalletService],
})
export class WalletModule {}
