import { Injectable } from '@nestjs/common';
import { UserguardService } from '../database/userguard/userguard.service';

@Injectable()
export class AuthService {
  constructor(private userguardService: UserguardService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log(username);
    const user = await this.userguardService.getOneUserByEmail(username);
    console.log(user);
    if (user) {
      return user;
    }
    return null;
  }
}
