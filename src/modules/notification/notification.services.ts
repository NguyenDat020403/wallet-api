import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/prisma/prisma.service';
import { FCMTokenDto } from './notification.dto';
import { generateResponse } from 'src/utils/response';
import { WalletService } from '../wallet/wallet.service';
import { UserService } from '../user/user.service';
import { FirebaseService } from 'src/firebase/firebase.service';

@UseGuards(JwtGuard)
@Injectable()
export class NotificationService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private walletService: WalletService,
    private userService: UserService,
    private firebaseService: FirebaseService,
  ) {}

  async registerDeviceNotificationToken(userId: string, dto: FCMTokenDto) {
    const registerToken = await this.prisma.users.update({
      where: { user_id: userId },
      data: {
        notiToken: dto.FCMToken,
      },
    });
    if (!registerToken) {
      return generateResponse('register token fail', '', '200', 'fail');
    }
    return generateResponse('register token success', registerToken, '200', '');
  }

  async sendNotification(
    address: string,
    notification: { title: string; body: string },
  ) {
    const walletId = await this.walletService.findWalletIdByAddress(address);

    if (!walletId) {
      return generateResponse('fail to find wallet', '', '400', 'fail');
    }
    const user = await this.userService.findUserByWalletId(walletId);

    if (!user.notiToken)
      return generateResponse('please check permission', '', '400', 'fail');
    console.log('user.notiToken', user.notiToken);
    console.log('user.naame', user.username);

    await this.firebaseService.sendNotification(user.notiToken, notification);
  }
}
