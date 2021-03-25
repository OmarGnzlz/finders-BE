import { HttpException, Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/createRegister.dto';
import { UserguardService } from '../database/userguard/userguard.service';
import * as bcrypt from 'bcrypt';
import { TypeuserService } from '../database/typeuser/typeuser.service';
import { UserService } from 'src/database/user/user.service';

@Injectable()
export class RegisterService {
  constructor(
    private registerRepository: UserguardService,
    private typeUserRepository: TypeuserService,
    private patientRepository: UserService
  ) {}

  newUser = async (passwordTxt: string) => {
    // const salt = bcrypt.genSaltSync(10);
    const salt = 10;
    const password = passwordTxt;
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };

  validateEmail = (email: string) => {
    const aRCheck = /^[a-z0-9+_.-]+@[a-z0-9.-]+[.]{1}[a-z]+$/g;
    const returnWord = 'email';
    if (email.match(aRCheck) === null) return returnWord;
    return false;
  };

  validatePasswordString = (password: any) => {
    const returnWord = 'password';
    const stringCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/g;
    if (password.match(stringCheck) === null) return returnWord;
    return false;
  };

  getUserEmailToValidation = async (email: string) => {
    return await this.registerRepository.getOneUserByEmail(email);
  };

  getUserNameToValidation = async (name: string) => {
    return await this.registerRepository.getOneUserByName(name);
  };

  lowerCaseWord = (word: string) => {
    return word.toLowerCase();
  };

  createRegister = async (createRegisterDto: CreateRegisterDto, media: boolean) => {
    createRegisterDto.email = this.lowerCaseWord(createRegisterDto.email);
    if (this.validateEmail(createRegisterDto.email) === 'email')
      throw new HttpException('Email is not valid', 400);
    if (
      this.validatePasswordString(createRegisterDto.password) === 'password'
    ) {
      const message = `Password should content:
- At least 1 capital letter
- At least 1 character
- At least 1 number
- At least 1 special character
- Longitude min is 6
 `;
      throw new HttpException(message, 400);
    }

    /* const userExist = await this.getUserNameToValidation(
      createRegisterDto.name,
    ); */
    const emailExist = await this.getUserEmailToValidation(
      createRegisterDto.email,
    );

    if (media === false && (emailExist)) throw new HttpException('user exist', 400);
    if (media) {
      const checkEmail: any = await this.registerRepository.getUserByEmailAndUser(createRegisterDto.name, createRegisterDto.email)
      if (checkEmail) return this.getUser(checkEmail.id);
    }

    createRegisterDto.password = await this.newUser(createRegisterDto.password);
    const register: any = await this.registerRepository.createUser(
      createRegisterDto,
    );

    const { password, ...res } = register;
    res.type_user_id = await this.typeUserRepository.getTypeById(
      res.type_user_id,
    );
    return res;
  };

  loginUser = async (user: any) => {
    return user;
  };

  getUsers = async () => {
    const users = await this.registerRepository.getAll();
    for (const element in users) {
      users[element].type_user_id = await this.typeUserRepository.getTypeById(
        users[element].type_user_id,
      );
    }
    return users;
  };

  getUser = async (userID: string) => {
    const user: any = await this.registerRepository.getById(parseInt(userID));
    if (user === undefined) throw new HttpException('User does not exist', 404);
    
    const angels: any = await this.patientRepository.getUserGuard(parseInt(userID))

    
    
    const { password, ...res } = user;
    res.type_user_id = await this.typeUserRepository.getTypeById(
      res.type_user_id,
    );
    return {
      user: res,
      angels: angels
    };
  };
}
