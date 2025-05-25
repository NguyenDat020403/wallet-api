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
  getTransactionHistoryEVM,
  getTransactionStatusBTC,
  sendTransactionEVM,
} from 'src/utils/transaction';
import {
  FeeRequest,
  TransactionConfirmBTC,
  TransactionHistory,
  TransactionHistoryEVM,
  TransactionRequestBTC,
  TransactionRequestEVM,
  TransactionStatusRequestBTC,
} from './transaction.dto';
import { generateResponse } from 'src/utils/response';
import { NotificationService } from '../notification/notification.services';
import { DateService } from 'src/common/date.service';
import { NetworkConfig, NetworkConfigService } from 'src/utils/networkConfig';

@UseGuards(JwtGuard)
@Injectable()
export class TransactionService {
  private networks: { [key: string]: NetworkConfig };
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private dataService: DateService,
    private notificationService: NotificationService,
    private networkConfigService: NetworkConfigService,
  ) {
    this.networks = {};
  }
  async onModuleInit() {
    // Fetch network configurations from Etherscan API
    await this.networkConfigService.fetchNetworkConfigs();
    this.networks = this.networkConfigService.getNetworkConfigCache();
  }
  /**
   * Estimates gas or fee for a transaction based on chain ID.
   * @param data Fee request data including chain_id, ownerAddress, and amount.
   * @returns Standardized response with fee data or error message.
   */
  async getEstimateGas(data: FeeRequest) {
    console.log(data);
    if (data.chain_id === '0') {
      try {
        const feeData = await getFeeBTC(data.ownerAddress, data.amount);
        if (feeData === null) {
          return generateResponse('fail', '', '200', 'check your balance');
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

  async sendTransactionBTC(rq: TransactionRequestBTC) {
    try {
      const transactionHex = await createTransactionBTC(rq);
      const tx = await this.confirmTransactionBTC({
        toAddress: rq.receiverAddress,
        transactionHex: transactionHex,
      });
      if (tx) {
        return generateResponse('success', tx, '200');
      }
      console.log('tx', tx);
      return generateResponse('fail', '', '200', 'something wrong');
    } catch (error) {
      return generateResponse('fail', '', '200', error.message);
    }
  }
  async confirmTransactionBTC(rq: TransactionConfirmBTC) {
    return await broadcastTransaction(rq.transactionHex)
      .then(async (txId: string) => {
        await this.notificationService.sendNotification(rq.toAddress, {
          title: 'Receive Token',
          body: 'Receive tokennnnnnnnnnnnnnnnn',
        });
        return txId;
      })
      .catch(() => {
        return null;
      });
  }
  async sendTransactionEVM(rq: TransactionRequestEVM) {
    const tx = await sendTransactionEVM(
      rq.privateKey,
      rq.from,
      rq.to,
      rq.amount,
      rq.rpc_url,
      rq.decimals,
      rq.fee,
      rq.asset,
      rq.contract_address,
    );
    if (!tx) {
      return generateResponse('fail', '', '200', 'something wrong');
    }
    return generateResponse('success', tx, '200');
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

  async getTransactionHistory(address: string, chain_id: string) {
    if (chain_id === '0') {
      const transactionHistory: TransactionHistory[] =
        await getTransactionHistory(address);
      if (!transactionHistory) {
        return generateResponse(
          'fail',
          '',
          '200',
          'fail to load transaction history',
        );
      }
      const network = await this.prisma.networks.findFirst({
        where: {
          chain_id: chain_id,
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

        const network_name = network?.network_name || 'no data';
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
    } else {
      console.log(chain_id + address);
      const network = await this.prisma.networks.findFirst({
        where: { chain_id: chain_id },
      });
      if (!network) {
        return generateResponse('fail', '', '200', 'fail to network data');
      }
      const transactionHistory = await getTransactionHistoryEVM(
        address,
        chain_id,
        this.networkConfigService,
      );
      if (
        transactionHistory?.error === 'true' ||
        transactionHistory?.status === '0'
      ) {
        return generateResponse(transactionHistory.message, '', '200', '1');
      }
      const data: TransactionHistoryEVM[] = transactionHistory?.data;
      const txs = data.map((item) => ({
        time_transaction: this.dataService.convertUnixToDate(item.timestamp),
        action_transaction:
          item.from.toLowerCase() === address.toLowerCase() ? 0 : 1,
        from_address: item.from,
        to_address: item.to || address,
        fee_network: item.gasUsed,
        network_name: network.network_name,
        block_hash: item.blockHash,
        block_height: item.blockNumber,
      }));
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
  async getSendTransactionToAddressHistory(address: string) {
    const transactionHistory: TransactionHistory[] =
      await getTransactionHistory(address);
    if (!transactionHistory) {
      return generateResponse('fail', '', '200', 'fail to load feeData');
    }
    const listAddress = transactionHistory
      .filter((item) => {
        return item.vin.some(
          (vin) => vin.prevout?.scriptpubkey_address === address,
        );
      })
      .map((item) => {
        const vo = item.vout.find((vo) => vo.scriptpubkey_address !== address);
        return vo?.scriptpubkey_address;
      })
      .filter((address): address is string => !!address);
    return generateResponse('success', listAddress, '200');
  }
}
