import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  emitTxStatusEVM(txHash: string, status: 'pending' | 'success' | 'fail') {
    console.log('[SocketGateway] emitTxStatusEVM ->', txHash, status);

    this.server.emit('txStatusEVM', { txHash, status });
  }

  emitTxStatusBTC(txHash: string, status: 'pending' | 'success' | 'fail') {
    this.server.emit('txStatusBTC', { txHash, status });
  }
}
