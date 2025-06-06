import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy';
import { TransactionService } from './transaction.services';
import { TransactionController } from './transaction.controller';
import { DateService } from 'src/common/date.service';
import { NetworkConfigService } from 'src/utils/networkConfig';
import { NotificationModule } from '../notification/notification.module';
import { SocketGateway } from './socket.gateway';

@Module({
  imports: [JwtModule.register({}), NotificationModule],
  controllers: [TransactionController],
  providers: [
    SocketGateway,
    TransactionService,
    JwtStrategy,
    DateService,
    NetworkConfigService,
  ],
  exports: [TransactionService],
})
export class TransactionModule {}
