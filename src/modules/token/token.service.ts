/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Inject, Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import {
  CreateTokenDto,
  GetTokenMarketDataDTO,
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
import { generateResponse } from 'src/utils/response';
import { CoinService } from '../coinpaprika/coinpaprika.service';
import { CoinMarketResponse } from '../coinpaprika/coinpaprika.dto';
import { CacheService } from '../cache/cache.service';
import pLimit from 'p-limit';
import { TokenWithNetwork } from '../wallet/wallet.dto';
import { networks } from 'generated/prisma';
const limit = pLimit(3);
@UseGuards(JwtGuard)
@Injectable()
export class TokenService {
  constructor(
    private prisma: PrismaService,
    private networkService: NetworkService,
    private jwt: JwtService,
    private config: ConfigService,
    private readonly coinService: CoinService,
    private readonly cacheService: CacheService,

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
    // try {
    console.log(body);
    const token = await this.prisma.tokens.create({
      data: {
        ...body,
      },
    });
    console.log('token', token);
    const tokenNetwork = await this.prisma.token_networks.create({
      data: {
        contract_address: contract_address.toLowerCase(),
        network_id: network_id,
        token_id: token.token_id,
      },
    });
    console.log('tokenNetwork', tokenNetwork);
    await this.prisma.wallet_networks.findFirst({
      where: {
        wallet_id: wallet_id,
        network_id: tokenNetwork.network_id,
      },
    });
    await this.prisma.wallet_network_tokens.create({
      data: {
        wallet_id: wallet_id,
        token_network_id: tokenNetwork.token_network_id,
      },
    });
    return true;
    // } catch {
    //   return false;
    // }
  }

  async getTokens(wallet_id) {
    const walletTokenNetwork = await this.prisma.wallet_network_tokens.findMany(
      {
        where: {
          wallet_id: wallet_id,
        },
      },
    );
    const token_networkList = await Promise.all(
      walletTokenNetwork.map(async (item) =>
        this.cacheService.getOrSet(
          `token_network_${item.token_network_id}`,
          () =>
            this.prisma.token_networks.findFirst({
              where: { token_network_id: item.token_network_id! },
            }),
        ),
      ),
    );

    return await Promise.all(
      token_networkList.map(async (item) =>
        limit(async () => {
          const [token, network, wallet_network] = await Promise.all([
            this.cacheService.getOrSet(`token_${item?.token_id}`, () =>
              this.prisma.tokens.findFirst({
                where: { token_id: item?.token_id || '' },
              }),
            ),
            this.cacheService.getOrSet(`network_${item?.network_id}`, () =>
              this.prisma.networks.findFirst({
                where: { network_id: item?.network_id || '' },
              }),
            ),
            this.cacheService.getOrSet(
              `wallet_network_${wallet_id}_${item?.network_id}`,
              () =>
                this.prisma.wallet_networks.findFirst({
                  where: { wallet_id: wallet_id, network_id: item?.network_id },
                }),
            ),
          ]);
          const market_data: CoinMarketResponse | null =
            await this.getTokenMarketData({
              symbol: token?.symbol || '',
              name: token?.token_name || '',
            });
          const market = {
            price: market_data?.quotes.USD.price,
            percent_change_1h: market_data?.quotes.USD.percent_change_1h,
            percent_change_24h: market_data?.quotes.USD.percent_change_24h,
            percent_change_7d: market_data?.quotes.USD.percent_change_7d,
            percent_change_30d: market_data?.quotes.USD.percent_change_30d,
            volume_24h: market_data?.quotes.USD.volume_24h,
            volume_24h_change_24h:
              market_data?.quotes.USD.volume_24h_change_24h,
          };
          const balance = await getBalanceV1(
            wallet_network!.address.toLowerCase(),
            network?.symbol,
            network?.rpc_url,
            item?.contract_address,
            token?.decimals,
          );
          return {
            token: token,
            network: network,
            contract_address: item?.contract_address,
            balance,
            market_data: market,
          };
        }),
      ),
    );
  }
  async getTokensV1(wallet_id: string) {
    const walletTokenNetwork = await this.prisma.wallet_network_tokens.findMany(
      {
        where: { wallet_id },
      },
    );

    const token_networkList = await Promise.all(
      walletTokenNetwork.map(async (item) =>
        this.cacheService.getOrSet(
          `token_network_${item.token_network_id}`,
          () =>
            this.prisma.token_networks.findFirst({
              where: { token_network_id: item.token_network_id! },
            }),
        ),
      ),
    );

    const groupedByNetworkName: {
      [networkName: string]: {
        network: networks;
        tokens: TokenWithNetwork[];
      };
    } = {};

    const tokenWithNetworkList = await Promise.all(
      token_networkList.map(async (item) =>
        limit(async () => {
          const [token, network, wallet_network] = await Promise.all([
            this.cacheService.getOrSet(`token_${item?.token_id}`, () =>
              this.prisma.tokens.findFirst({
                where: { token_id: item?.token_id || '' },
              }),
            ),
            this.cacheService.getOrSet(`network_${item?.network_id}`, () =>
              this.prisma.networks.findFirst({
                where: { network_id: item?.network_id || '' },
              }),
            ),
            this.cacheService.getOrSet(
              `wallet_network_${wallet_id}_${item?.network_id}`,
              () =>
                this.prisma.wallet_networks.findFirst({
                  where: { wallet_id: wallet_id, network_id: item?.network_id },
                }),
            ),
          ]);
          const market_data: CoinMarketResponse | null =
            await this.getTokenMarketData({
              symbol: token?.symbol || '',
              name: token?.token_name || '',
            });
          const market = {
            price: market_data?.quotes.USD.price ?? 0,
            percent_change_1h: market_data?.quotes.USD.percent_change_1h ?? 0,
            percent_change_24h: market_data?.quotes.USD.percent_change_24h ?? 0,
            percent_change_7d: market_data?.quotes.USD.percent_change_7d ?? 0,
            percent_change_30d: market_data?.quotes.USD.percent_change_30d ?? 0,
            volume_24h: market_data?.quotes.USD.volume_24h ?? 0,
            volume_24h_change_24h: Number(
              market_data?.quotes.USD.volume_24h_change_24h ?? 0,
            ),
          };
          const balance = await getBalanceV1(
            wallet_network!.address.toLowerCase(),
            network?.symbol,
            network?.rpc_url,
            item?.contract_address,
            token?.decimals,
          );

          return {
            token: token,
            network: network,
            contract_address: item?.contract_address,
            balance,
            market_data: market,
          };
        }),
      ),
    );
    console.log('first');
    for (const item of tokenWithNetworkList) {
      if (!item || !item.network) continue;

      const networkName = item.network?.network_name || 'Unknown';
      if (!groupedByNetworkName[networkName]) {
        groupedByNetworkName[networkName] = {
          network: item.network,
          tokens: [],
        };
      }

      groupedByNetworkName[networkName].tokens.push({
        token: item.token,
        network: item.network,
        contract_address: item.contract_address,
        balance: item.balance,
        market_data: item.market_data,
      });
    }
    console.log(groupedByNetworkName);
    return groupedByNetworkName;
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
      token_id: tokenListResponse[index].token_id,
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
        network_id: query.network_id,
        contract_address: query.contract_address.toLowerCase(),
      },
    });
    if (tokenNetwork) {
      const walletTokenNetwork =
        await this.prisma.wallet_network_tokens.findFirst({
          where: {
            token_network_id: tokenNetwork.token_network_id,
            wallet_id: query.wallet_id,
          },
        });
      if (walletTokenNetwork) {
        return generateResponse('token existed', '', '200', '1');
      }
      await this.prisma.wallet_network_tokens.create({
        data: {
          token_network_id: tokenNetwork.token_network_id,
          wallet_id: query.wallet_id,
        },
      });
      return generateResponse('add token success', '', '200', '0');
    }
    const network = await this.networkService.findById(query.network_id);
    if (!network) {
      return generateResponse('not found any network', '', '200', '1');
    }
    const tokenInfo = await this.$getTokenInfoMoralis(
      Number(network?.chain_id),
      query.contract_address.toLowerCase(),
    );
    console.log(tokenInfo);
    const existToken = await this.prisma.tokens.findFirst({
      where: {
        token_name: tokenInfo?.token_name || ' ',
      },
    });
    if (existToken) {
      const tokenNetwork = await this.prisma.token_networks.create({
        data: {
          contract_address: query.contract_address.toLowerCase(),
          token_id: existToken.token_id,
          network_id: query.network_id,
        },
      });
      await this.prisma.wallet_network_tokens.create({
        data: {
          wallet_id: query.wallet_id,
          token_network_id: tokenNetwork.token_network_id,
        },
      });
      return generateResponse('create token success', '', '200', '0');
    }
    if (tokenInfo) {
      const priceFeedId = await this.networkService.getPriceFeedId(
        tokenInfo.symbol,
      );
      const { chainId, address, ...body } = tokenInfo;
      console.log(body);
      const isCreated = await this.createToken({
        wallet_id: query.wallet_id,
        contract_address: query.contract_address.toLowerCase(),
        network_id: query.network_id,
        price_feed_id: priceFeedId || '',
        percent_change_24h: '',
        ...body,
      });
      if (!isCreated) {
        return generateResponse('create token failed', '', '200', '1');
      }
      return generateResponse('create token success', '', '200', '0');
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
  async getTokenMarketData(rq: GetTokenMarketDataDTO) {
    const marketData = await this.coinService.getCoinMarketDataBySymbolName(
      rq.symbol,
      rq.name,
    );
    console.log('token_coingecko_id,', marketData);
    if (!marketData) {
      return null;
    }
    return marketData;
  }
  async getListTokenByWalletId(wallet_id: string) {
    const wallet_token_network = await this.prisma.wallet_networks.findMany({
      where: {
        wallet_id: wallet_id,
      },
      include: {
        networks: true,
      },
    });
    return wallet_token_network;
  }
  async getTokenByNetworkId(network_id: string, wallet_id: string) {
    const walletN = await this.prisma.wallet_networks.findFirst({
      where: {
        network_id: network_id,
        wallet_id: wallet_id,
      },
    });
    return walletN;
  }
  async getTokensByNetworkId(network_id: string, wallet_id: string) {
    const tokens = await this.prisma.token_networks.findFirst({
      where: {
        network_id: network_id,
      },
    });

    if (!tokens) {
      return [];
    }

    const walletTNs = await this.prisma.wallet_network_tokens.findMany({
      where: {
        token_network_id: {
          in: [tokens.token_network_id],
        },
        wallet_id: wallet_id,
      },
    });
    console.log(walletTNs);
    return walletTNs;
  }
  // async getPriceFeedId(symbol: string): Promise<string | null> {
  //   try {
  //     const query = `Crypto.${symbol.toLocaleUpperCase()}/USD`;
  //     const res = await axios.get<PythPrice[]>(
  //       `${HERMES_PYTH_ENDPOINT}/price_feeds`,
  //       { params: { query, asset_type: 'crypto' } },
  //     );

  //     const priceFeedId = res.data?.[0]?.id;
  //     return priceFeedId ? `0x${priceFeedId}` : null;
  //   } catch (error) {
  //     console.error(
  //       `Failed to get price feed ID for ${symbol}:`,
  //       error.message,
  //     );
  //     return null;
  //   }
  // }
}
