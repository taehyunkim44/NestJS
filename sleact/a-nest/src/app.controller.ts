import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, // @Inject('CUSTOM_KEY') private readonly customValue;
  ) {}

  // req, res에 대해 알아요.

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
