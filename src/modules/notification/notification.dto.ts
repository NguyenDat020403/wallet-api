import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class FCMTokenDto {
  @IsString()
  @IsNotEmpty()
  FCMToken: string;
}
export class NotificationDto {
  @IsString()
  title: string;
  @IsString()
  body: string;
}

export class SendNotificationDto {
  @IsString()
  address: string;
  @IsObject()
  notification: NotificationDto;
}
