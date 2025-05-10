import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { TransactionService } from './transaction.services';
import { FeeRequest } from './transaction.dto';

@UseGuards(JwtGuard)
@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post('getEstimateGas')
  async getEstimateGas(@Body() rq: FeeRequest) {
    const response = await this.transactionService.getEstimateGas(rq);
    return response;
  }
}
