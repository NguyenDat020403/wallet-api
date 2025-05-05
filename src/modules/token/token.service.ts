/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTokenDto, QueryTokenFromAddressDto } from './token.dto';
import { ERROR_MAP } from 'src/constants/errorMap';
import Moralis from 'moralis';
import { NetworkService } from '../network/network.services';
import { getBalance, getBalanceV1 } from 'src/utils/wallet';
@UseGuards(JwtGuard)
@Injectable()
export class TokenService {
  constructor(
    private prisma: PrismaService,
    private networkService: NetworkService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async createToken({
    wallet_id,
    network_id,
    contract_address,
    ...body
  }: CreateTokenDto) {
    const network = await this.prisma.networks.findUnique({
      where: { network_id },
    });
    if (!network) throw new BadRequestException(ERROR_MAP.NETWORK_NOT_FOUND);

    const token = await this.prisma.tokens.create({
      data: {
        ...body,
        price_feed_id: network.price_feed_id,
      },
    });
    const tokenNetwork = await this.prisma.token_networks.create({
      data: {
        contract_address: contract_address,
        network_id: network.network_id,
        token_id: token.token_id,
      },
    });
    const walletNetwork = await this.prisma.wallet_networks.findFirst({
      where: {
        wallet_id: wallet_id,
      },
    });

    const balanceToken = await getBalance(walletNetwork?.address || '');

    const balanceString = balanceToken
      ? (Number(balanceToken) / 1e18).toFixed(8)
      : '0';

    const walletTokenNetwork = await this.prisma.wallet_network_tokens.create({
      data: {
        wallet_id: wallet_id,
        token_network_id: tokenNetwork.token_network_id,
        balance: balanceString,
      },
    });
    console.log(111, walletTokenNetwork);
    return tokenNetwork;
  }
  // async createDefaultToken(wallet_id, network_id, contract_address) {
  //   // const netWorkSymbolDefault = ['BTC', 'ETH'];
  //   const walletNetwork = await this.prisma.wallet_networks.findMany({
  //     where: wallet_id,
  //     include: {
  //       networks: true,
  //     },
  //   });

  //   console.log(walletNetwork);
  // }

  async getTokens(wallet_id) {
    const walletNetwork = await this.prisma.wallet_networks.findMany({
      where: { wallet_id: wallet_id },
      include: {
        networks: true,
      },
    });
    const netWorkIds = walletNetwork
      .map((wn) => wn.networks?.network_id)
      .filter((id): id is string => id !== undefined);

    const tokenNetwork = await this.prisma.token_networks.findMany({
      where: {
        network_id: {
          in: netWorkIds,
        },
      },
      include: {
        tokens: true,
        networks: true,
      },
    });

    return await Promise.all(
      tokenNetwork.map(async (tn) => {
        const walletAddress = walletNetwork.find(
          (wn) => wn.networks?.network_id === tn.network_id,
        )?.address;

        if (!walletAddress || !tn.networks?.rpc_url) return null;

        const balance = await getBalanceV1(
          walletAddress,
          tn.networks.symbol,
          tn.networks.rpc_url,
        );

        return {
          token: tn.tokens,
          network_id: tn.network_id,
          balance,
        };
      }),
    );
  }
  //   async getTokens(query: QueryTokensDto) {
  //     const {
  //       limit = 10,
  //       offset = 0,
  //       // sortBy = 'created_at',
  //       // sortOrder = 'DESC',
  //       keyword = '',
  //       exclude_contract_addresses = [],
  //       ...filter
  //     } = query;
  //     const network = await this.prisma.network.findUnique({
  //       where: {
  //         id: filter.network_id,
  //       },
  //     });
  //     if (!network) throw new BadRequestException(ERROR_MAP.NETWORK_NOT_FOUND);
  //     const tokensNetwork = await this.prisma.token_network.findMany({
  //       where: {
  //         network: {
  //           id: filter.network_id,
  //         },
  //         contract_address: {
  //           notIn: exclude_contract_addresses,
  //         },
  //         token: {
  //           OR: [
  //             {
  //               name: {
  //                 contains: keyword,
  //                 mode: 'insensitive',
  //               },
  //             },
  //             {
  //               symbol: {
  //                 contains: keyword,
  //                 mode: 'insensitive',
  //               },
  //             },
  //           ],
  //         },
  //       },
  //       take: Number(limit),
  //       skip: Number(offset),
  //       // order: {
  //       //   [`token.${sortBy}`]: sortOrder,
  //       // },
  //     });
  //     const count = await this.prisma.token_network.count({
  //       where: {
  //         network_id: filter.network_id,
  //         contract_address: {
  //           notIn: exclude_contract_addresses,
  //         },
  //         token: {
  //           OR: [
  //             {
  //               name: {
  //                 contains: keyword,
  //                 mode: 'insensitive',
  //               },
  //             },
  //             {
  //               symbol: {
  //                 contains: keyword,
  //                 mode: 'insensitive',
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     });
  //     return generateResponse(
  //       'success',
  //       tokensNetwork.map((item) => ({
  //         ...item,
  //         contract_address: item.contract_address,
  //       })),
  //       {
  //         limit: query.limit || 10,
  //         offset: query.offset || 0,
  //         total: count,
  //       },
  //     );
  //   }
  //   async getInfoFromAddress(query: QueryTokenFromAddressDto) {
  //     const tokenNetwork = await this.prisma.token_network.findFirst({
  //       where: {
  //         contract_address: query.contract_address,
  //         network: {
  //           id: query.network_id,
  //         },
  //       },
  //       include: {
  //         token: true,
  //       },
  //     });
  //     if (tokenNetwork) {
  //       return {
  //         name: tokenNetwork.token?.name,
  //         symbol: tokenNetwork.token?.symbol,
  //         decimal: tokenNetwork.token?.decimal,
  //         thumbnail: tokenNetwork.token?.thumbnail,
  //         priceFeedId: tokenNetwork.token?.price_feed_id,
  //       };
  //     }

  //     try {
  //       const network = await this.prisma.network.findUnique({
  //         where: { id: query.network_id },
  //       });
  //       const chainHex = '0x' + network?.chain_id.toString(16);
  //       const [infoToken] = await Promise.all([
  //         Moralis.EvmApi.token.getTokenMetadata({
  //           chain: chainHex,
  //           addresses: [query.contract_address],
  //         }),
  //       ]);
  //       console.log(infoToken);
  //       const token = infoToken.raw[0];
  //       if (!token) return null;

  //       return {
  //         name: token.name,
  //         symbol: token.symbol,
  //         decimal: Number(token.decimals),
  //         thumbnail: token.thumbnail,
  //       };
  //     } catch (erorr) {
  //       throw new BadRequestException(erorr);
  //     }
  //   }

  async findOrCreateIfNotExist(query: QueryTokenFromAddressDto) {
    const tokenNetwork = await this.prisma.token_networks.findFirst({
      where: {
        contract_address: query.contract_address,
        networks: {
          network_id: query.network_id,
        },
      },
      include: {
        tokens: true,
        networks: true,
      },
    });
    if (tokenNetwork) return tokenNetwork;
    const network = await this.networkService.findById(query.network_id);

    const tokenInfo = await this.$getTokenInfoMoralis(
      Number(network?.chain_id),
      query.contract_address,
    );

    const existToken = await this.prisma.tokens.findFirst({
      where: {
        token_name: tokenInfo?.token_name || ' ',
      },
    });
    if (existToken) {
      const tokenNetwork = await this.prisma.token_networks.create({
        data: {
          contract_address: query.contract_address,
          token_id: existToken.token_id,
          network_id: network?.network_id,
        },
        include: {
          tokens: true,
          networks: true,
        },
      });

      return tokenNetwork;
    }
    if (tokenInfo) {
      const priceFeedId = await this.networkService.getPriceFeedId(
        tokenInfo.symbol,
      );
      const result = await this.createToken({
        wallet_id: query.wallet_id,
        ...tokenInfo,
        contract_address: query.contract_address,
        network_id: query.network_id,
        price_feed_id: priceFeedId || '',
        percent_change_24hr: '',
      });

      return result;
    }
  }

  async $getTokenInfoMoralis(chainId: number, address: string) {
    try {
      const chainHex = '0x' + chainId.toString(16);
      const [infoData] = await Promise.all([
        Moralis.EvmApi.token.getTokenMetadata({
          chain: chainHex,
          addresses: [address],
        }),
      ]);
      const token = infoData.raw[0];

      if (!token) return null;
      return {
        token_name: token.name,
        symbol: token.symbol,
        decimals: Number(token.decimals),
        thumbnail: token.thumbnail || '',
      };
    } catch (error) {
      console.log(error);
    }
  }
}
