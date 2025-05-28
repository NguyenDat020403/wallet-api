import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';
import { ChainList } from './types';
import { PrismaService } from 'src/modules/prisma/prisma.service';

export interface NetworkConfig {
  chain_id: string;
  name: string;
  rpc_url?: string;
  api_url: string;
  api_key?: string;
  network: string;
  blockexplorer: string;
  status: number;
}

@Injectable()
export class NetworkConfigService {
  private networkCache: { [key: string]: NetworkConfig } = {};

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {}

  async fetchNetworkConfigs(): Promise<void> {
    try {
      const response: AxiosResponse<ChainList> = await axios.get(
        'https://api.etherscan.io/v2/chainlist',
      );
      const chains = response.data.result;

      for (const chain of chains) {
        const chainId = chain.chainid;
        this.networkCache[chainId] = {
          chain_id: chainId,
          name: chain.chainname,
          rpc_url: await this.getRpcUrl(chainId),
          api_url: chain.apiurl,
          api_key: this.getApiKey(chainId),
          network: this.mapChainIdToNetwork(chainId),
          blockexplorer: chain.blockexplorer,
          status: chain.status,
        };
      }
    } catch (error) {
      console.error(
        'Lỗi khi lấy danh sách mạng từ Etherscan API:',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        error.message,
      );
      throw new Error('Không thể lấy cấu hình mạng từ API');
    }
  }

  getNetworkConfig(chain_id: string): NetworkConfig | null {
    return this.networkCache[chain_id] || null;
  }
  getNetworkConfigCache(): { [key: string]: NetworkConfig } {
    return this.networkCache;
  }
  private async getRpcUrl(chain_id: string) {
    const network = await this.prisma.networks.findFirst({
      where: {
        chain_id: chain_id,
      },
    });
    return network?.rpc_url || 'no data';
  }

  private getApiKey(chain_id: string): string | undefined {
    console.log('getAPIKey: ', chain_id);
    // const apiKeyMap: { [key: string]: string } = {
    //   '1': this.configService.get<string>('ETHEREUM_API_KEY'),
    //   '56': this.configService.get<string>('BSC_API_KEY'),
    //   '137': this.configService.get<string>('POLYGON_API_KEY'),
    // };
    return this.configService.get<string>('ETHERSCAN_API_KEY');
  }

  private mapChainIdToNetwork(chain_id: string): string {
    const networkMap: { [key: string]: string } = {
      '1': 'mainnet',
      '56': 'bsc',
      '137': 'polygon',
      '11155111': 'sepolia',
      '42161': 'arbitrum',
      // Thêm các mạng khác nếu cần
    };
    return networkMap[chain_id] || chain_id;
  }
}
