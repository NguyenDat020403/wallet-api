import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { NotificationService } from './notification.services';
import { FCMTokenDto, NotificationDto } from './notification.dto';
import { User } from 'src/decorators/user.decorator';

@UseGuards(JwtGuard)
@Controller('notifications')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Post('registerNotiToken')
  async registerNotiToken(
    @User('sub') userId: string,
    @Body() dto: FCMTokenDto,
  ) {
    console.log(dto);
    return await this.notificationService.registerDeviceNotificationToken(
      userId,
      dto,
    );
  }
  @Post('sendNotification')
  async sendNotification(
    @Body() dto: { address: string; notification: NotificationDto },
  ) {
    return await this.notificationService.sendNotification(
      dto.address,
      dto.notification,
    );
  }
}
