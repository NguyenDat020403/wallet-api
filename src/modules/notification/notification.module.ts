import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.services';
import { FirebaseService } from 'src/modules/firebase/firebase.service';
import { WalletModule } from '../wallet/wallet.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [JwtModule.register({}), WalletModule, UserModule],
  controllers: [NotificationController],
  providers: [NotificationService, JwtStrategy, FirebaseService],
  exports: [NotificationService],
})
export class NotificationModule {}
