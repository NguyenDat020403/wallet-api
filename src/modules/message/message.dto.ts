import { IsUUID, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsUUID()
  sender_id: string;

  @IsUUID()
  receiver_id: string;

  @IsString()
  content: string;
}
