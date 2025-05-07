import { Controller, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { TransactionService } from './transaction.services';

@UseGuards(JwtGuard)
@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}
}
