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
  getTransactionHistory,
  getTransactionStatusBTC,
} from 'src/utils/transaction';
import {
  FeeRequest,
  TransactionConfirmBTC,
  TransactionHistory,
  TransactionRequestBTC,
  TransactionStatusRequestBTC,
} from './transaction.dto';
import { generateResponse } from 'src/utils/response';
import { NotificationService } from '../notification/notification.services';
import { DateService } from 'src/common/date.service';
@UseGuards(JwtGuard)
@Injectable()
export class TransactionService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private dataService: DateService,
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
      .then(async (transactionHex) => {
        await this.confirmTransaction({
          toAddress: rq.receiverAddress,
          transactionHex: transactionHex,
        });
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
  async confirmTransaction(rq: TransactionConfirmBTC) {
    return await broadcastTransaction(rq.transactionHex)
      .then(async (txId) => {
        await this.notificationService.sendNotification(rq.toAddress, {
          title: 'Receive Token',
          body: 'Receive tokennnnnnnnnnnnnnnnn',
        });
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

  async getTransactionHistory(address: string, token_id: string) {
    const transactionHistory: TransactionHistory[] =
      await getTransactionHistory(address);
    if (!transactionHistory) {
      return generateResponse('fail', '', '200', 'fail to load feeData');
    }
    const network = await this.prisma.token_networks.findFirst({
      where: {
        token_id: token_id,
      },
      include: {
        networks: true,
      },
    });
    const txs = transactionHistory.map((item) => {
      const time_transaction = this.dataService.convertUnixToDate(
        item.status.block_time,
      );
      const action_transaction =
        item.vin[0].prevout.scriptpubkey_address === address ? 0 : 1;
      const from_address = item.vin[0].prevout.scriptpubkey_address;

      const to_address = (() => {
        if (from_address === address) {
          const vo = item.vout.find(
            (vo) => vo.scriptpubkey_address !== address,
          );
          return vo?.scriptpubkey_address || address;
        }
        return address;
      })();
      const fee_network = item.fee;

      const network_name = network?.networks
        ? network?.networks.network_name
        : 'no data';
      const block_hash = item.status.block_hash;
      const block_height = item.status.block_height;
      return {
        time_transaction: time_transaction,
        action_transaction: action_transaction,
        from_address: from_address,
        to_address: to_address,
        fee_network: fee_network,
        network_name: network_name,
        block_hash: block_hash,
        block_height: block_height,
      };
    });
    const grouped = {};

    txs.forEach((tx) => {
      const date = tx.time_transaction;
      if (!grouped[date]) {
        grouped[date] = [];
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      grouped[date].push(tx);
    });
    return generateResponse('success', grouped, '200');
  }
}
