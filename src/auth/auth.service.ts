import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(user: any) {
    return user;
  }
}
