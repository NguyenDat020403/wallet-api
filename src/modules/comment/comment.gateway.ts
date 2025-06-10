import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { comments } from 'generated/prisma';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: 'comments',
})
@Injectable()
export class CommentGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async handleConnection(client: Socket) {
    try {
      console.log('client: ', client);
      const token = client.handshake.auth.token;
      const payload = await this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      client.data.user = payload;
    } catch (error) {
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Gửi thông báo bình luận mới
  async notifyNewComment(comment: comments) {
    console.log('client: ', comment);

    // 1. Gửi đến tất cả client trong phòng của bài post (để cập nhật bottom sheet)
    this.server.to(`post:${comment.post_id}`).emit('newComment', comment);

    // // 2. Gửi thông báo đến người đăng bài viết
    // const post = await this.prisma.posts.findUnique({
    //   where: { post_id: comment.post_id },
    //   select: { user_id: true },
    // });

    // if (post) {
    //   this.server.to(`user:${post.user_id}`).emit('newCommentNotification', {
    //     commentId: comment.comment_id,
    //     postId: comment.post_id,
    //     content: comment.content,
    //     user: comment.user,
    //     created_at: comment.created_at,
    //   });
    // }
  }

  @SubscribeMessage('joinPost')
  async handleJoinPost(
    @MessageBody() postId: string,
    @ConnectedSocket() client: Socket,
  ) {
    await client.join(`post:${postId}`);
    // Tham gia phòng user để nhận thông báo
    await client.join(`user:${client.data.user.sub}`); // Giả sử 'sub' là user_id trong JWT payload
    return {
      message: `Joined post:${postId} and user:${client.data.user.sub}`,
    };
  }

  @SubscribeMessage('leavePost')
  async handleLeavePost(
    @MessageBody() postId: string,
    @ConnectedSocket() client: Socket,
  ) {
    await client.leave(`post:${postId}`);
    return { message: `Left post:${postId}` };
  }
}
