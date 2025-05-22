/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  BadRequestException,
  Inject,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateTokenDto,
  QueryTokenFromAddressDto,
  TokenMetadata,
} from './token.dto';
import { ERROR_MAP } from 'src/constants/errorMap';
import Moralis from 'moralis';
import { NetworkService } from '../network/network.services';
import { getBalanceV1 } from 'src/utils/wallet';
import { defaultTokens, TokenNetworkDefault } from './tokenDefaultList';
import axios from 'axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
@UseGuards(JwtGuard)
@Injectable()
export class TokenService {
  constructor(
    private prisma: PrismaService,
    private networkService: NetworkService,
    private jwt: JwtService,
    private config: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  private async getSymbolToIdMap(): Promise<Record<string, string>> {
    const cacheKey = 'coingecko:symbol_to_id';
    const cached =
      await this.cacheManager.get<Record<string, string>>(cacheKey);
    if (cached) return cached;

    const res = await axios.get('https://api.coingecko.com/api/v3/coins/list');
    const data = res.data;

    const map: Record<string, string> = {};
    data.forEach((coin) => {
      map[coin.symbol.toLowerCase()] = coin.id;
    });

    await this.cacheManager.set(cacheKey, map, 60 * 60 * 24); // 24h
    return map;
  }

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
    const symbolToId = await this.getSymbolToIdMap();
    const validCoins = tokenNetwork.filter(
      (t) => symbolToId[t.tokens?.token_name.toLowerCase() || ''],
    );
    console.log('validCoins', validCoins);

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
          tn.contract_address,
          tn.tokens?.decimals,
        );

        return {
          token: tn.tokens,
          network: tn.networks,
          balance,
        };
      }),
    );
  }
  async createDefaultToken() {
    const tokenMetadataList: TokenMetadata[] = [];
    for (const token of defaultTokens) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const tokenMetadata = await this.getTokenMetadata(token);
      if (tokenMetadata) {
        tokenMetadataList.push(tokenMetadata);
      }
    }

    const tokenListResponse = await Promise.all(
      tokenMetadataList.map(async (token) => {
        const tokenSaved = await this.prisma.tokens.create({
          data: {
            token_name: token.token_name,
            symbol: token.symbol,
            thumbnail: token.thumbnail,
            decimals: token.decimals,
          },
        });
        return tokenSaved;
      }),
    );
    console.log('chieu dai chuoi', tokenListResponse.length);
    // if (tokenListResponse) {
    //   console.log(tokenListResponse);
    // }
    const networkIds = await Promise.all(
      tokenMetadataList.map(async (token) => {
        const network = await this.networkService.findNetworkByChainId(
          token.chainId.toString(),
        );
        return network?.network_id;
      }),
    );
    console.log('networkIds', networkIds);
    const tokenNetworkData = tokenMetadataList.map((token, index) => ({
      token_id: tokenListResponse[index].token_id, // ID của token vừa tạo
      network_id: networkIds[index],
      contract_address: token.address,
    }));
    await this.prisma.token_networks.createMany({
      data: tokenNetworkData,
    });
  }
  async createDefaultTokenNetwork() {
    const listTokenNetworkDefault = TokenNetworkDefault;
    const tokenNetworks = await this.prisma.token_networks.createMany({
      data: listTokenNetworkDefault,
    });
    return tokenNetworks;
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
  async $getTokenInfoCoingecko(chainId: number, coingeckoId?: string) {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coingeckoId}`,
      );
      const data = res.data;

      return {
        chainId: chainId,
        address: '',
        token_name: data.name,
        symbol: data.symbol.toUpperCase(),
        decimals: 8,
        thumbnail: data.image?.thumb || '',
      };
    } catch (error) {
      console.log(error);
    }
  }
  async $getTokenInfoMoralis(chainId: number, address: string) {
    try {
      const chainHex = '0x' + chainId.toString(16);
      const [infoData] = await Promise.all([
        Moralis.EvmApi.token.getTokenMetadata({
          chain: chainHex,
          addresses: [address.toLowerCase()],
        }),
      ]);
      const token = infoData.raw[0];

      if (!token) return null;
      return {
        chainId: chainId,
        address: token.address,
        token_name: token.name,
        symbol: token.symbol,
        decimals: Number(token.decimals),
        thumbnail: token.thumbnail || token.logo || '',
      };
    } catch (error) {
      console.log(error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getTokenMetadata(token: any) {
    console.log(token);
    if (token.coingeckoId && token.address === '') {
      return await this.$getTokenInfoCoingecko(
        token.chainId,
        token.coingeckoId,
      );
    }
    if (token.address && !token.isTestnet) {
      return await this.$getTokenInfoMoralis(token.chainId, token.address);
    }
    if (token.isTestnet) {
      return {
        chainId: token.chainId,
        symbol: token.symbol,
        address: token.address,
        token_name: token.token_name,
        decimals: Number(token.decimals),
        thumbnail: token.thumbnail || token.logo || '',
      };
    }
  }

  async getPriceFeedId(symbol: string): Promise<string | null> {
    try {
      const query = `Crypto.${symbol.toLocaleUpperCase()}/USD`;
      const res = await axios.get<PythPrice[]>(
        `${HERMES_PYTH_ENDPOINT}/price_feeds`,
        { params: { query, asset_type: 'crypto' } },
      );

      const priceFeedId = res.data?.[0]?.id;
      return priceFeedId ? `0x${priceFeedId}` : null;
    } catch (error) {
      console.error(
        `Failed to get price feed ID for ${symbol}:`,
        error.message,
      );
      return null;
    }
  }
}
