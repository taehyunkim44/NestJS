import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';

// 요청과 응답에 대해서는 모름
@Injectable()
export class AppService {
  constructor(private usersService: UsersService) {}

  async getHello() {
    this.usersService.getUser();
    this.getWow();
    return process.env.SECRET;
  }

  async getWow() {}
}
