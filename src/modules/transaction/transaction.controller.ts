import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { TransactionService } from './transaction.services';
import {
  CurrentTransactionRequest,
  FeeRequest,
  TransactionConfirmBTC,
  TransactionHistoryRequest,
  TransactionRequest,
  TransactionRequestBTC,
  TransactionRequestEVM,
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
  @Post('getTransactionsHistory')
  async getTransactionsHistory(@Body() rq: TransactionHistoryRequest) {
    return await this.transactionService.getTransactionHistory(
      rq.address,
      rq.chain_id,
      rq.token_id,
    );
  }
  @Post('getSendTransactionToAddressHistory')
  async getSendTransactionToAddressHistory(
    @Body() rq: TransactionHistoryRequest,
  ) {
    return await this.transactionService.getSendTransactionToAddressHistory(
      rq.address,
      rq.chain_id,
      rq.decimals,
    );
  }
  @Post('getCurrentTransactionHistory')
  async getCurrentTransactionHistory(@Body() rq: CurrentTransactionRequest) {
    return await this.transactionService.getCurrentTransaction(
      rq.tx,
      rq.address,
      rq.chain_id,
      rq.token_id,
    );
  }
}
