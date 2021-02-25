import { HttpException, Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/createRegister.dto';
import { UserguardService } from '../database/userguard/userguard.service';
import * as bcrypt from 'bcryptjs';
import { TypeuserService } from '../database/typeuser/typeuser.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RegisterService {
  constructor(
    private registerRepository: UserguardService,
    private typeUserRepository: TypeuserService,
    private authService: AuthService,
  ) {}

  newUser = async (user: any) => {
    const salt = bcrypt.genSaltSync(10);
    const password = JSON.stringify(user.password);
    const hash = await bcrypt.hashSync(password, salt);
    const userCreated: CreateRegisterDto = {
      name: user.name,
      email: user.email,
      pictures: user.pictures,
      password: hash,
      type_user_id: 1,
    };
    return userCreated;
  };

  validations = (user: any) => {
    const aRCheck = /[@]/g;
    const stringCheck = /[a-zA-Z]/g;
    const numberCheck = /[0-9]/g;
    const min = 6;
    if (user.email.match(aRCheck) === null) return 'email';
    if (
      user.password.match(stringCheck) === null ||
      user.password.match(numberCheck) === null
    )
      return 'password';
    if (user.password.length < min) return 'len';
    return false;
  };

  async createRegister(createRegisterDto: any) {
    const checker = this.validations(createRegisterDto);
    if (checker === 'email') throw new HttpException('Email is not valid', 400);
    if (checker === 'password')
      throw new HttpException('Password shall be alfa numeric', 400);
    if (checker === 'len')
      throw new HttpException('Password shall be more than 6 characters', 400);
    const result = await this.registerRepository.getOneUser(
      createRegisterDto.name,
      createRegisterDto.email,
    );
    if (result) throw new HttpException('user exist', 400);
    const user = await this.newUser(createRegisterDto);
    const register: any = await this.registerRepository.createUser(user);
    const { password, ...res } = register;
    res.type_user_id = await this.typeUserRepository.getTypeById(
      res.type_user_id,
    );
    return res;
  }

  async loginUser(user: any) {
    return user;
  }

  async getUsers() {
    const users = await this.registerRepository.getAll();
    for (const element in users) {
      users[element].type_user_id = await this.typeUserRepository.getTypeById(
        users[element].type_user_id,
      );
    }
    return users;
  }

  async getUser(userID: string) {
    const user: any = await this.registerRepository.getById(parseInt(userID));
    const { password, ...res } = user;
    res.type_user_id = await this.typeUserRepository.getTypeById(
      res.type_user_id,
    );
    return res;
  }
}
