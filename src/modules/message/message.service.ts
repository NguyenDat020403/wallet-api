import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { NotificationService } from '../notification/notification.services';
import { CreateMessageDto } from './message.dto';
import { PrismaService } from '../prisma/prisma.service';
import { generateResponse } from 'src/utils/response';
import { MessageGateway } from './message.gateway';

@UseGuards(JwtGuard)
@Injectable()
export class MessageService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private notificationService: NotificationService,
    private messageGateway: MessageGateway,
  ) {}
  async create(dto: CreateMessageDto) {
    const userR = await this.prisma.users.findUnique({
      where: { user_id: dto.receiver_id },
    });
    if (!userR) {
      return generateResponse('send message failed', '', '200', '1');
    }
    const message = await this.prisma.messages.create({
      data: {
        sender_id: dto.sender_id,
        receiver_id: dto.receiver_id,
        content: dto.content,
      },
    });
    await this.notificationService.sendUserNotification(
      message.receiver_id,
      {
        title: 'Message',
        body: `From ${userR.username}: ${message.content}`,
      },
      'MessageDetailScreen',
      {
        userId: userR.user_id,
      },
    );
    this.messageGateway.sendMessageNotification(userR.user_id, message);
    return generateResponse('success', message, '200', '0');
  }

  async getChatUsers(userId: string) {
    const messages = await this.prisma.messages.findMany({
      where: {
        OR: [{ sender_id: userId }, { receiver_id: userId }],
      },
      orderBy: { created_at: 'desc' },
      include: {
        sender: true,
        receiver: true,
      },
    });
    const conversations = new Map<string, any>();

    for (const msg of messages) {
      const otherUser = msg.sender_id === userId ? msg.receiver : msg.sender;
      if (!otherUser) continue;

      if (!conversations.has(otherUser.user_id)) {
        conversations.set(otherUser.user_id, {
          user_id: otherUser.user_id,
          username: otherUser.username,
          avatar: otherUser.avatar,
          lastMessage: {
            sender: msg.sender,
            content: msg.content,
            created_at: msg.created_at,
          },
        });
      }
    }

    return generateResponse(
      'success',
      Array.from(conversations.values()),
      '200',
      '0',
    );
  }
  async getConversation(
    userId: string,
    otherUserId: string,
    page: number = 1,
    limit: number = 20,
  ) {
    const skip = (page - 1) * limit;

    const messages = await this.prisma.messages.findMany({
      where: {
        OR: [
          { sender_id: userId, receiver_id: otherUserId },
          { sender_id: otherUserId, receiver_id: userId },
        ],
      },
      orderBy: { created_at: 'desc' },
      skip,
      take: limit,
    });
    const totalMessages = await this.prisma.messages.count({
      where: {
        OR: [
          {
            sender_id: userId,
            receiver_id: otherUserId,
          },
          {
            sender_id: otherUserId,
            receiver_id: userId,
          },
        ],
      },
    });
    return generateResponse(
      'success',
      {
        messages: messages,
        total: totalMessages,
        page,
        limit,
        totalPages: Math.ceil(totalMessages / limit),
      },
      '200',
      '0',
    );
  }
}
