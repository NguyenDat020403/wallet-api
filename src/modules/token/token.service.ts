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
import { getBalanceV1 } from 'src/utils/wallet';
import { TokenDefault } from './tokenDefaultList';
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

    const balanceToken = await getBalanceV1(
      walletNetwork?.address || '123123',
      network.symbol,
      network.rpc_url,
    );

    const walletTokenNetwork = await this.prisma.wallet_network_tokens.create({
      data: {
        wallet_id: wallet_id,
        token_network_id: tokenNetwork.token_network_id,
        balance: balanceToken,
      },
    });
    return {
      token,
      network,
      tokenNetwork,
      walletTokenNetwork,
    };
  }
  async createDefaultToken() {
    const listTokenDefault = TokenDefault;
    const tokens = this.prisma.tokens.createMany({
      data: listTokenDefault,
    });
    return tokens;
  }

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
        console.log(tn);
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

  async resetDatabase() {
    const tokenNetworks = await this.prisma.token_networks.deleteMany({
      where: {},
    });
    if (tokenNetworks === null) {
      console.log('Da xoa tokenNetworks');
    }
    const tokens = await this.prisma.tokens.deleteMany({
      where: {},
    });
    if (tokens === null) {
      console.log('Da xoa tokens');
    }
    const user = await this.prisma.users.deleteMany({ where: {} });
    if (user === null) {
      console.log(
        'da xoa user - wallet - wallet_network - wallet_network_token',
      );
    }
  }

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
        percent_change_24h: '',
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
