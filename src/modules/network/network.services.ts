import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNetworkDto, CreateNetworkSwapDto } from './network.dto';
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
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);
    const query = `Crypto.${data.current_symbol.toLocaleUpperCase()}/USD`;
    const res = await axios.get<any>(
      `${'https://hermes.pyth.network/v2'}/price_feeds`,
      {
        params: { query, asset_type: 'crypto' },
      },
    );
    const priceFeedId = res.data?.[0]?.id ? `0x${res.data[0].id}` : null;

    const { network_swap, ...dataElse } = data;

    const network = await this.prisma.network.create({
      data: {
        ...dataElse,
        price_feed_id: priceFeedId?.toString(),
        creatorid: user.id,
        network_swap: {},
      },
    });

    if (network_swap) {
      const createdSwap = await this.prisma.network_swap.create({
        data: {
          swap_contract_address: network_swap.swap_contract_address,
          factory_contract_address: network_swap.factory_contract_address,
          quote_contract_address: network_swap.quote_contract_address,
          wrapped_token_address: network_swap.wrapped_token_address,
          network: {
            connect: { id: network.id },
          },
        },
      });
      await this.prisma.network.update({
        where: { id: network.id },
        data: {
          networkswapid: createdSwap.id,
        },
      });
    }
    return generateResponse('success', network);
  }

  async createNetworkSwap(networkId: string, data: CreateNetworkSwapDto) {
    const network = await this.prisma.network.findUnique({
      where: {
        id: networkId,
      },
      include: {
        network_swap: true,
      },
    });
    if (!network) throw new BadRequestException(ERROR_MAP.NETWORK_NOT_FOUND);
    if (network.network_swap)
      throw new BadRequestException(ERROR_MAP.SWAP_EXIST);

    const networkSwap = await this.prisma.network_swap.create({
      data: {
        swap_contract_address: data.swap_contract_address,
        factory_contract_address: data.factory_contract_address,
        quote_contract_address: data.quote_contract_address,
        wrapped_token_address: data.wrapped_token_address,
        network: {
          connect: { id: network.id },
        },
      },
    });
    await this.prisma.network.update({
      where: { id: network.id },
      data: {
        networkswapid: networkSwap.id,
      },
    });

    return generateResponse('success', networkSwap.id);
  }
}
