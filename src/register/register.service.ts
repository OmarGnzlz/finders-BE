import { HttpException, Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/createRegister.dto';
import { UserguardService } from '../database/userguard/userguard.service';
import * as bcrypt from 'bcryptjs';
import { TypeuserService } from '../database/typeuser/typeuser.service';

@Injectable()
export class RegisterService {
  constructor(
    private registerRepository: UserguardService,
    private typeUserRepository: TypeuserService
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
    }
    return userCreated
  }

  async createRegister(createRegisterDto: any) {
    let ans = /[@]/g
    if (createRegisterDto.email.match(ans) === null) throw new HttpException ('Email is not valid', 400);
    ans = /[a-zA-Z]/g
    const numberCheck = /[0-9]/g
    if (
      createRegisterDto.password.match(ans) === null ||
      createRegisterDto.password.match(numberCheck) === null
    ) throw new HttpException ('Password shall be alfa numeric', 400)
    const result = await this.registerRepository.getOneUser(createRegisterDto.name, createRegisterDto.email);
    if(result) throw new HttpException ('user exist', 400);
    const user = await this.newUser(createRegisterDto);
    const register: any = await this.registerRepository.createUser(user);
    let { password, ...res } = register
    res.type_user_id = await this.typeUserRepository.getTypeById(res.type_user_id);
    return res;
  }

  async getUsers() {
    let users = await this.registerRepository.getAll();
    for (const element in users) {
      users[element].type_user_id = await this.typeUserRepository.getTypeById(users[element].type_user_id)
    }
    return users;
  }
  
  async getUser(userID: string) {
    const user: any = await this.registerRepository.getById(parseInt(userID));
    let { password, ...res } = user
    res.type_user_id = await this.typeUserRepository.getTypeById(res.type_user_id);
    return res;
  }
}
