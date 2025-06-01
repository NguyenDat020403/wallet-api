import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateNetworkDto } from './network.dto';
import { ERROR_MAP } from 'src/constants/errorMap';
import axios, { AxiosResponse } from 'axios';
import { generateResponse } from 'src/utils/response';
import { WalletService } from '../wallet/wallet.service';
@UseGuards(JwtGuard)
@Injectable()
export class NetworkService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    @Inject(forwardRef(() => WalletService))
    private walletService: WalletService,
  ) {}

  async createNetwork(userId: string, data: CreateNetworkDto) {
    const { wallet_network_address, ...networkData } = data;

    const wallet_id = await this.walletService.findWalletIdByUserId(userId);
    if (!wallet_id) {
      return generateResponse('Something wrong', '', '200', '1');
    }
    const actualChainId = await this.getChainIdFromRpc(data.rpc_url);

    if (actualChainId !== Number(data.chain_id)) {
      return generateResponse(`ChainID doesn't match`, '', '200', '1');
    }
    const existsNetwork = await this.prisma.networks.findFirst({
      where: { chain_id: data.chain_id },
    });
    if (existsNetwork) {
      const wallet_network = await this.prisma.wallet_networks.findFirst({
        where: {
          network_id: existsNetwork.network_id,
          wallet_id: wallet_id,
          address: wallet_network_address,
        },
      });
      if (wallet_network) {
        return generateResponse(`Network existed`, '', '200', '1');
      }
      await this.prisma.wallet_networks.create({
        data: {
          wallet_id: wallet_id,
          network_id: existsNetwork.network_id,
          address: wallet_network_address,
        },
      });
      return generateResponse('success', existsNetwork, '200');
    }
    const network = await this.prisma.networks.create({
      data: {
        ...networkData,
        creator_id: userId,
      },
    });
    if (!network) {
      return generateResponse(
        ERROR_MAP.NETWORK_CREATION_FAILED,
        network,
        '200',
        '1',
      );
    }
    await this.prisma.wallet_networks.create({
      data: {
        wallet_id: wallet_id,
        network_id: network.network_id,
        address: wallet_network_address,
      },
    });
    return generateResponse('success', network, '200');
  }
  async findDefaultNetwork(userId?: string) {
    return await this.prisma.networks.findMany({
      where: {
        OR: [{ is_default_network: true }, { creator_id: userId }],
      },
    });
  }
  async findById(id: string) {
    return this.prisma.networks.findFirst({
      where: {
        network_id: id,
      },
    });
  }
  async getNetworkList(wallet_id: string) {
    const wallet_network = await this.prisma.wallet_networks.findMany({
      where: {
        wallet_id: wallet_id,
      },
      include: {
        networks: true,
      },
    });
    if (!wallet_network) {
      return generateResponse('fail to load networks', '', '200', '1');
    }
    return generateResponse('success', wallet_network, '200', '0');
  }
  async getNetworkByUserId(userId: string) {
    const networks = await this.prisma.networks.findMany({
      where: {
        creator_id: userId,
      },
    });
    return generateResponse('success', networks);
  }
  async getPriceFeedId(tokenSymbol: string | undefined) {
    const query = `Crypto.${tokenSymbol?.toLocaleUpperCase()}/USD`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = await axios.get<any>(
      `${'https://hermes.pyth.network/v2'}/price_feeds`,
      {
        params: { query, asset_type: 'crypto' },
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const priceFeedId = res.data?.[0]?.id ? `0x${res.data[0].id}` : null;
    if (priceFeedId !== null) {
      return priceFeedId;
    }
  }
  async findNetworkByChainId(chain_id: string) {
    const network = await this.prisma.networks.findFirst({
      where: {
        chain_id: chain_id,
      },
    });
    return network;
  }
  async getChainIdFromRpc(rpcUrl: string): Promise<number> {
    try {
      const response = await axios.post(rpcUrl, {
        jsonrpc: '2.0',
        method: 'eth_chainId',
        params: [],
        id: 1,
      });

      const hex = response.data.result;
      if (!hex) throw new Error('No chainId returned');

      return parseInt(hex, 16);
    } catch (err) {
      throw new BadRequestException(
        'Không thể kết nối đến RPC hoặc RPC URL không hợp lệ',
      );
    }
  }
}
