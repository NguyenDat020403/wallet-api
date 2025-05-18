import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.services';
import { WalletService } from '../wallet/wallet.service';
import { UserService } from '../user/user.service';
import { TokenService } from '../token/token.service';
import { NetworkService } from '../network/network.services';
import { FirebaseService } from 'src/firebase/firebase.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    JwtStrategy,
    WalletService,
    UserService,
    TokenService,
    NetworkService,
    FirebaseService,
  ],
})
export class NotificationModule {}
