import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any): Promise<any> {
    try {
      const payload = {
        username: user.name,
        email: user.email,
        type_user: user.type_user_id.type_user,
      };
      return this.jwtService.sign(payload);
    } catch (e) {
      console.log(e);
    }
  }
}
