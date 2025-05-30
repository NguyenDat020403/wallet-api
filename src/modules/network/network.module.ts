import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { NetworkController } from './network.controller';
import { NetworkService } from './network.services';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  imports: [JwtModule.register({}), forwardRef(() => WalletModule)],
  controllers: [NetworkController],
  providers: [NetworkService],
  exports: [NetworkService],
})
export class NetworkModule {}
