import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  broadcastTransaction,
  createTransactionBTC,
  getFeeBTC,
  getGasPriceInfuraAPI,
  getTransactionStatusBTC,
} from 'src/utils/transaction';
import {
  FeeRequest,
  TransactionRequestBTC,
  TransactionStatusRequestBTC,
} from './transaction.dto';
import { generateResponse } from 'src/utils/response';
import { NotificationService } from '../notification/notification.services';
@UseGuards(JwtGuard)
@Injectable()
export class TransactionService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private notificationService: NotificationService,
  ) {}
  async getEstimateGas(data: FeeRequest) {
    console.log(data);
    if (data.chain_id === '0') {
      try {
        const feeData = await getFeeBTC(data.ownerAddress, data.amount);
        if (feeData === null) {
          return generateResponse('fail', '', '200', 'Nap them di');
        }
        return generateResponse('success', feeData, '200');
      } catch (e) {
        return generateResponse('fail', '', '200', e);
      }
    }
    const feeData = await getGasPriceInfuraAPI(data.chain_id);
    if (!feeData) {
      return generateResponse('fail', '', '200', 'fail to load feeData');
    }
    return generateResponse('success', feeData, '200');
  }

  async createTransaction(rq: TransactionRequestBTC) {
    return await createTransactionBTC(rq)
      .then((transactionHex) => {
        return generateResponse('success', transactionHex, '200');
      })
      .catch((error) => {
        return generateResponse(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
          error.message,
          '',
          '200',
          'fail to load feeData',
        );
      });
  }
  async confirmTransaction(transactionHex: string) {
    console.log(transactionHex);

    return await broadcastTransaction(transactionHex)
      .then(async (txId) => {
        await this.notificationService.sendNotification(
          'tb1q8g65yrl95sl8kq5r9wq2kvuqyzq0fzrk0u3wvf',
          {
            title: 'Receive Token',
            body: 'Receive tokennnnnnnnnnnnnnnnn',
          },
        );
        return generateResponse('success', txId, '200');
      })
      .catch((error) => {
        return generateResponse(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
          error.message,
          '',
          '200',
          'fail to broadcast Transaction',
        );
      });
  }

  async getTransactionStatusBTC(rq: TransactionStatusRequestBTC) {
    console.log(rq);
    return await getTransactionStatusBTC(rq)
      .then((data) => {
        return generateResponse('success', data, '200');
      })
      .catch((error) => {
        return generateResponse(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
          error.message,
          '',
          '200',
          'fail to load feeData',
        );
      });
  }
}
