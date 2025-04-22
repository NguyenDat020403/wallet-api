import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTokenDto, QueryTokensDto } from './token.dto';
import { ERROR_MAP } from 'src/constants/errorMap';
import { generateResponse } from 'src/utils/response';
import { token_network } from 'generated/prisma';

@UseGuards(JwtGuard)
@Injectable()
export class TokenService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async createToken({ network_id, contract_address, ...body }: CreateTokenDto) {
    const network = await this.prisma.network.findUnique({
      where: { id: network_id },
    });
    if (!network) throw new BadRequestException(ERROR_MAP.NETWORK_NOT_FOUND);
    const token = await this.prisma.token.create({
      data: {
        ...body,
        price_feed_id: network.price_feed_id,
      },
    });
    await this.prisma.token_network.create({
      data: {
        contract_address: contract_address,
        network_id: network.id,
        token_id: token.id,
      },
    });

    return generateResponse('success', {
      id: token.id,
    });
  }

  async getTokens(query: QueryTokensDto) {
    const {
      limit = 10,
      offset = 0,
      sortBy = 'created_at',
      sortOrder = 'DESC',
      keyword = '',
      exclude_contract_addresses = [],
      ...filter
    } = query;
    const network = await this.prisma.network.findUnique({
      where: {
        id: filter.network_id,
      },
    });
    if (!network) throw new BadRequestException(ERROR_MAP.NETWORK_NOT_FOUND);
    const tokensNetwork = await this.prisma.token_network.findMany({
      where: {
        network: {
          id: filter.network_id,
        },
        contract_address: {
          notIn: exclude_contract_addresses,
        },
        token: {
          OR: [
            {
              name: {
                contains: keyword,
                mode: 'insensitive',
              },
            },
            {
              symbol: {
                contains: keyword,
                mode: 'insensitive',
              },
            },
          ],
        },
      },
      take: Number(limit),
      skip: Number(offset),
      // order: {
      //   [`token.${sortBy}`]: sortOrder,
      // },
    });
    const count = await this.prisma.token_network.count({
      where: {
        network_id: filter.network_id,
        contract_address: {
          notIn: exclude_contract_addresses,
        },
        token: {
          OR: [
            {
              name: {
                contains: keyword,
                mode: 'insensitive',
              },
            },
            {
              symbol: {
                contains: keyword,
                mode: 'insensitive',
              },
            },
          ],
        },
      },
    });
    return generateResponse(
      'success',
      tokensNetwork.map((item) => ({
        ...item,
        contract_address: item.contract_address,
      })),
      {
        limit: query.limit || 10,
        offset: query.offset || 0,
        total: count,
      },
    );
  }
}
