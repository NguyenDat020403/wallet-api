import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: true,
  namespace: 'messages',
})
export class MessageGateway {
  @WebSocketServer()
  server: Server;

  // Gửi socket noti tới receiver
  sendMessageNotification(receiverId: string, message: any) {
    this.server.to(receiverId).emit('new_message', message);
  }

  // User join socket với user_id làm roomId
  @SubscribeMessage('join')
  handleJoin(client: any, payload: { userId: string }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    client.join(payload.userId);
  }
}
