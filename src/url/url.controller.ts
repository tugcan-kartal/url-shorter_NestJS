import { Controller, Post, Body, Get, Param, Res } from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  async shortenUrl(@Body('url') url: string) {
    const shortUrl = await this.urlService.shortenUrl(url);
    return { shortUrl };
  }

  @Get(':shortKey')
  async resolveUrl(@Param('shortKey') shortKey: string, @Res() res: Response) {
    const longUrl = await this.urlService.resolveUrl(shortKey);
    return res.redirect(longUrl);
  }
}
