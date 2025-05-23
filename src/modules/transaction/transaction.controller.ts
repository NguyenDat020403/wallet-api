import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { TransactionService } from './transaction.services';
import {
  FeeRequest,
  TransactionConfirmBTC,
  TransactionHistoryRequest,
  TransactionRequest,
  TransactionRequestBTC,
  TransactionRequestEVM,
  TransactionStatusRequestBTC,
} from './transaction.dto';
import { generateResponse } from 'src/utils/response';

@UseGuards(JwtGuard)
@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post('getEstimateGas')
  async getEstimateGas(@Body() rq: FeeRequest) {
    const response = await this.transactionService.getEstimateGas(rq);
    return response;
  }
  @Post('sendTransactionEVM')
  async sendTransactionEVM(@Body() rq: TransactionRequestEVM) {
    return await this.transactionService.sendTransactionEVM(rq);
  }
  @Post('sendTransactionBTC')
  async sendTransactionBTC(@Body() rq: TransactionRequestBTC) {
    return await this.transactionService.sendTransactionBTC(rq);
  }
  @Post('confirmTransactionBTC')
  async confirmTransactionBTC(@Body() rq: TransactionConfirmBTC) {
    return await this.transactionService.confirmTransactionBTC(rq);
  }
  @Get('getTransactionStatusBTC')
  async getTransactionStatusBTC(@Body() rq: TransactionStatusRequestBTC) {
    return await this.transactionService.getTransactionStatusBTC(rq);
  }
  @Post('getTransactionHistory')
  async getTransactionHistory(@Body() rq: TransactionHistoryRequest) {
    return await this.transactionService.getTransactionHistory(
      rq.address,
      rq.token_id,
    );
  }
  @Post('getSendTransactionToAddressHistory')
  async getSendTransactionToAddressHistory(@Body() rq: TransactionRequest) {
    return await this.transactionService.getSendTransactionToAddressHistory(
      rq.address,
    );
  }
}
