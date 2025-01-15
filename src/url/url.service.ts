import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';
import * as crypto from 'crypto';

@Injectable()
export class UrlService {
  private readonly BASE_URL = 'http://localhost:3000';
  private readonly TTL = 24 * 60 * 60; 

  constructor(private readonly redisService: RedisService) {}

  async shortenUrl(longUrl: string): Promise<string> {
    const urlPattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
    if (!urlPattern.test(longUrl)) {
      throw new BadRequestException('Invalid URL format');
    }

    const existingKey = await this.redisService.get(longUrl);
    if (existingKey) {
      return `${this.BASE_URL}/${existingKey}`;
    }

    const shortKey = crypto.randomBytes(4).toString('hex');
    await this.redisService.set(shortKey, longUrl, this.TTL);
    await this.redisService.set(longUrl, shortKey, this.TTL);

    return `${this.BASE_URL}/${shortKey}`;
  }

  async resolveUrl(shortKey: string): Promise<string> {
    const longUrl = await this.redisService.get(shortKey);
    if (!longUrl) {
      throw new NotFoundException('Short URL not found');
    }
    return longUrl;
  }
}
