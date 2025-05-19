import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy';
import { TransactionService } from './transaction.services';
import { TransactionController } from './transaction.controller';
import { NotificationService } from '../notification/notification.services';
import { WalletService } from '../wallet/wallet.service';
import { FirebaseService } from 'src/firebase/firebase.service';
import { UserService } from '../user/user.service';
import { TokenService } from '../token/token.service';
import { NetworkService } from '../network/network.services';

@Module({
  imports: [JwtModule.register({})],
  controllers: [TransactionController],
  providers: [
    TransactionService,
    JwtStrategy,
    NotificationService,
    WalletService,
    TokenService,
    NetworkService,
    FirebaseService,
    UserService,
  ],
})
export class TransactionModule {}
