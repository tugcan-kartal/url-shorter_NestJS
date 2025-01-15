import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import { UrlModule } from './url/url.module';

@Module({
  imports: [RedisModule, UrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
