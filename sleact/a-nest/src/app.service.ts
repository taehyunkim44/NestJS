import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// 요청과 응답에 대해서는 모름
@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return this.configService.get('SECRET'); // process.env.DB_PASSWORD
  }
}
