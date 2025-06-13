import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { MessageService } from './message.service';
import { CreateMessageDto } from './message.dto';
import { User } from 'src/decorators/user.decorator';

@UseGuards(JwtGuard)
@Controller('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('create')
  async createMessage(@Body() dto: CreateMessageDto) {
    return this.messageService.create(dto);
  }
  @Get('')
  async getChatUsers(@User('sub') userId: string) {
    return this.messageService.getChatUsers(userId);
  }
  @Get('conversation')
  async getConversation(
    @User('sub') userId: string,
    @Query('otherUserId') otherUserId: string,
    @Query('page') page = '1',
    @Query('limit') limit = '20',
  ) {
    console.log(otherUserId + ' ----' + userId);
    return await this.messageService.getConversation(
      userId,
      otherUserId,
      parseInt(page),
      parseInt(limit),
    );
  }
}
