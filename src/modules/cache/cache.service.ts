// cache.service.ts
import { Injectable } from '@nestjs/common';
import NodeCache from 'node-cache';

@Injectable()
export class CacheService {
  private readonly cache = new NodeCache({ stdTTL: 300 }); // 5 phút

  async getOrSet<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
    const cached = this.cache.get<T>(key);
    if (cached) return cached;

    const result = await fetcher();
    this.cache.set(key, result);
    return result;
  }

  set<T>(key: string, value: T, ttlSeconds?: number) {
    if (ttlSeconds !== undefined) {
      this.cache.set(key, value, ttlSeconds);
    } else {
      this.cache.set(key, value);
    }
  }

  get<T>(key: string): T | undefined {
    return this.cache.get(key);
  }
}
