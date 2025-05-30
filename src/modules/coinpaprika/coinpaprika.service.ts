import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import axios, { AxiosResponse } from 'axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CoinMarketResponse } from './coinpaprika.dto';

@Injectable()
export class CoinService {
  private readonly COIN_LIST_CACHE_KEY = 'coin_list';

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCoinList(): Promise<CoinMarketResponse[]> {
    // // Kiểm tra cache trước
    // const cached = await this.cacheManager.get<CoinMarketResponse[]>(
    //   this.COIN_LIST_CACHE_KEY,
    // );
    // if (cached) {
    //   console.log('Return cached coin list');
    //   return cached;
    // }
    const response = await axios.get<CoinMarketResponse[]>(
      'https://api.coinpaprika.com/v1/tickers',
    );
    const coins = response.data;
    await this.cacheManager.set(this.COIN_LIST_CACHE_KEY, coins, 600);

    return coins;
  }

  async getCoinMarketDataBySymbolName(
    symbol: string,
    name: string,
  ): Promise<CoinMarketResponse | null> {
    try {
      const coins = await this.getCoinList();
      console.log(coins);
      console.log(symbol + '-' + name);
      const coin = coins.find(
        (c) => c.symbol.toLowerCase() === symbol.toLowerCase(),
      );
      console.log('coin: ', coin);
      if (!coin) {
        const id = symbol.toLowerCase() + '-' + name.toLowerCase();
        const response: AxiosResponse<CoinMarketResponse> = await axios.get(
          `https://api.coinpaprika.com/v1/tickers/${id}`,
        );
        return response.data;
      }
      return coin ? coin : null;
    } catch {
      return null;
    }
  }
}
