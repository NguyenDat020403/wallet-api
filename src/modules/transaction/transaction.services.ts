import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import {
  broadcastTransaction,
  createTransactionBTC,
  getCurrentTransactionBTC,
  getFeeBTC,
  getGasPriceInfuraAPI,
  getTransactionByHash,
  getTransactionsHistory,
  getTransactionsHistoryEVM,
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

  async getTransactionHistory(
    address: string,
    chain_id: string,
    token_id?: string,
  ) {
    if (chain_id === '0') {
      const transactionHistory: TransactionHistory[] =
        await getTransactionsHistory(address);
      if (!transactionHistory) {
        return generateResponse(
          'fail',
          '',
          '200',
          'fail to load transaction history',
        );
      }
      const txs = await this.$convertTransactionBTC(
        transactionHistory,
        address,
        chain_id,
        true,
      );
      return generateResponse('success', txs, '200');
    } else {
      const token = await this.prisma.tokens.findFirst({
        where: {
          token_id: token_id,
        },
      });
      const network = await this.prisma.networks.findFirst({
        where: { chain_id: chain_id },
      });
      if (!network) {
        return generateResponse('fail', '', '200', 'fail to network data');
      }
      const transactionHistory = await getTransactionsHistoryEVM(
        address,
        chain_id,
        this.networkConfigService,
        token?.decimals,
      );
      if (
        transactionHistory?.error === 'true' ||
        transactionHistory?.status === '0'
      ) {
        return generateResponse(transactionHistory.message, '', '200', '1');
      }
      const data: TransactionHistoryEVM[] = transactionHistory?.data;
      const txs = data.map((item) => ({
        transaction_hash: item.hash,
        time_transaction: this.dataService.convertUnixToDate(item.timestamp),
        action_transaction:
          item.from.toLowerCase() === address.toLowerCase() ? 0 : 1,
        from_address: item.from,
        to_address: item.to || address,
        fee_network: item.gasUsed,
        network_name: network.network_name,
        block_hash: item.blockHash,
        block_height: item.blockNumber,
        value: item.value,
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
      await getTransactionsHistory(address);
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

  async getCurrentTransaction(
    tx: string,
    address: string,
    chain_id: string,
    token_id?: string,
  ) {
    if (chain_id === '0') {
      const transaction = await getCurrentTransactionBTC(tx);
      if (!transaction) {
        return generateResponse('fail to load transaction', '', '200', '1');
      }
      const tConverted = await this.$convertTransactionBTC(
        [transaction],
        address,
        chain_id,
      );
      return generateResponse('success', tConverted[0], '200', '1');
    } else {
      const token = await this.prisma.tokens.findFirst({
        where: {
          token_id: token_id,
        },
      });
      const transaction = await getTransactionByHash(
        tx,
        chain_id,
        this.networkConfigService,
        token?.decimals,
      );
      if (!transaction) {
        return generateResponse('fail to load transaction', '', '200', '1');
      }
      const network = await this.prisma.networks.findFirst({
        where: { chain_id: chain_id },
      });
      if (!network) {
        return generateResponse('fail', '', '200', 'fail to network data');
      }
      const result = {
        transaction_hash: transaction.hash,
        time_transaction: this.dataService.convertUnixToDate(
          transaction.timestamp,
        ),
        action_transaction:
          transaction.from === address.toLowerCase() ? 'send' : 'receive',
        from_address: transaction.from,
        to_address: transaction.to,
        fee_network: transaction.gasUsed,
        network_name: network.network_name,
        block_hash: transaction.blockHash,
        block_height: transaction.blockNumber,
        status: transaction.status,
        gas_limit: transaction.gasLimit,
        nonce: transaction.nonce,
        value: transaction.value,
      };
      return generateResponse('success', result, '200');
    }
  }

  async $convertTransactionBTC(
    transactionsBTC: TransactionHistory[],
    userAddress: string,
    chain_id: string,
    isOrderByDate: boolean = false,
  ) {
    const network = await this.prisma.networks.findFirst({
      where: {
        chain_id: chain_id,
      },
    });
    const txs = transactionsBTC.map((item) => {
      const transaction_hash = item.txid;
      const time_transaction = this.dataService.convertUnixToDate(
        item.status.block_time,
      );
      const action_transaction =
        item.vin[0].prevout.scriptpubkey_address === userAddress ? 0 : 1;
      const from_address = item.vin[0].prevout.scriptpubkey_address;

      const to_address = (() => {
        if (from_address === userAddress) {
          const vo = item.vout.find(
            (vo) => vo.scriptpubkey_address !== userAddress,
          );
          return vo?.scriptpubkey_address || userAddress;
        }
        return userAddress;
      })();
      const fee_network = item.fee;

      const network_name = network?.network_name || 'no data';
      const block_hash = item.status.block_hash;
      const block_height = item.status.block_height;

      const value = (() => {
        if (from_address === userAddress) {
          const vo = item.vout.find(
            (vo) => vo.scriptpubkey_address !== userAddress,
          );
          return vo!.value / 1e8;
        }
        const vo = item.vout.find(
          (vo) => vo.scriptpubkey_address === userAddress,
        );
        return vo!.value / 1e8;
      })();
      return {
        transaction_hash: transaction_hash,
        time_transaction: time_transaction,
        action_transaction: action_transaction,
        from_address: from_address,
        to_address: to_address,
        fee_network: fee_network,
        network_name: network_name,
        block_hash: block_hash,
        block_height: block_height,
        value: value,
      };
    });
    if (isOrderByDate) {
      const txsGrouped = {};
      txs.forEach((tx) => {
        const date = tx.time_transaction;
        if (!txsGrouped[date]) {
          txsGrouped[date] = [];
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        txsGrouped[date].push(tx);
      });
      return txsGrouped;
    } else {
      return txs;
    }
  }
}
