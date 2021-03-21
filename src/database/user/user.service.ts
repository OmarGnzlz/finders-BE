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

  async getAll(){
    const data = await this.userRepository
      .createQueryBuilder('angel_user')
      .select(['id', 'name','address', 'id_document', 'pictures', 
      'contact_emergencies', 'institutions_id', 'userguard_id', 'type_user_id'])
      .execute()

      return data
  }
  
  async getUserById(id: number){
    const result =  await this.userRepository
      .createQueryBuilder('angel_user')
      .where('angel_user.id like :id', { id })
      .select(['id', 'name','address', 'id_document', 'pictures', 
      'contact_emergencies', 'institutions_id', 'userguard_id', 'type_user_id'])
      .execute()
      return result[0]
  }

}

