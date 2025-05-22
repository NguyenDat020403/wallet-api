import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { TransactionService } from './transaction.services';
import {
  FeeRequest,
  TransactionConfirmBTC,
  TransactionHistoryRequest,
  TransactionRequestBTC,
  TransactionStatusRequestBTC,
} from './transaction.dto';

@UseGuards(JwtGuard)
@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post('getEstimateGas')
  async getEstimateGas(@Body() rq: FeeRequest) {
    const response = await this.transactionService.getEstimateGas(rq);
    return response;
  }

  @Post('createTransactionBTC')
  async createTransactionBTC(@Body() rq: TransactionRequestBTC) {
    return await this.transactionService.createTransaction(rq);
  }
  @Post('confirmTransactionBTC')
  async confirmTransactionBTC(@Body() rq: TransactionConfirmBTC) {
    return await this.transactionService.confirmTransaction(rq);
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
}
