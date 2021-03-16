import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: any) {
    const register = this.userRepository.create(user);
    return await this.userRepository.save(register);
  }

  async getUserByDocument(id_document: string){
    const result = await this.userRepository.findOne({
      where: [
        {
          id_document
        }
      ]
    });
    return result
  }

}

