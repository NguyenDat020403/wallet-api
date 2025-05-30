import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CoinService } from './coinpaprika.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 600,
      max: 100,
    }),
  ],
  providers: [CoinService],
  exports: [CoinService],
})
export class CoinModule {}
