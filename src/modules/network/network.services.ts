import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNetworkDto } from './network.dto';
import { ERROR_MAP } from 'src/constants/errorMap';
import axios from 'axios';
import { generateResponse } from 'src/utils/response';
@UseGuards(JwtGuard)
@Injectable()
export class NetworkService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async createNetwork(userId: string, data: CreateNetworkDto) {
    const network = await this.prisma.networks.create({
      data: {
        ...data,
        creator_id: userId,
      },
    });
    if (!network) {
      throw new BadRequestException(ERROR_MAP.NETWORK_CREATION_FAILED);
    }
    return generateResponse('success', network);
  }
  async findDefaultNetwork() {
    return await this.prisma.networks.findMany({
      where: {
        is_default_network: true,
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
}
