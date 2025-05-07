import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy';
import { TransactionService } from './transaction.services';
import { TransactionController } from './transaction.controller';

@Module({
  imports: [JwtModule.register({})],
  controllers: [TransactionController],
  providers: [TransactionService, JwtStrategy],
})
export class TransactionModule {}
