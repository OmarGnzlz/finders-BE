import { Injectable } from '@nestjs/common';
import { UserguardService } from '../database/userguard/userguard.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userguardService: UserguardService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userguardService.getOneUserByEmail(username);
    const compare = await bcrypt.compare(pass, user.password)
    console.log(compare)
    await bcrypt.compare(user.password, pass, function(err: any, res: any) {
      console.log('password' ,pass)
      console.log('password db', user.password)
      console.log('res', res)
      console.log('err', err)
    });
    if (user) {
      return user;
    }
    return null;
  }
}
