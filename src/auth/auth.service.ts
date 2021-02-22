import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any): Promise<any> {
    try {
      const payload = { username: user.username };
      return this.jwtService.sign(payload);
    } catch (e) {
      console.log(e);
    }
  }
}
