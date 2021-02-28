import { Injectable } from '@nestjs/common';
import { UserguardService } from '../database/userguard/userguard.service';
import { TypeuserService } from '../database/typeuser/typeuser.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userguardService: UserguardService,
    private typeuserService: TypeuserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    let user: any = await this.userguardService.getOneUserByEmail(username);
    const hash = user.password;
    user = await this.userguardService.getById(user.id);
    user.type_user_id = await this.typeuserService.getTypeById(
      user.type_user_id,
    );
    const compare = await bcrypt.compare(pass, hash);
    if (user && compare) {
      const { password, ...res } = user;
      return res;
    }
    return null;
  }

  async payloadUser(user: any) {
    const payload = {
      user: user.name,
      sub: user.id,
      image: user.pictures,
      type_user_id: user.type_user_id.type_user,
      email: user.email,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
