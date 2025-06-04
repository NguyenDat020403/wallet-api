import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SwapController } from './swap.controller';
import { SwapService } from './swap.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [SwapController],
  providers: [SwapService],
  exports: [SwapService],
})
export class SwapModule {}
