import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserGuard } from './entities/userguard.entity';

@Injectable()
export class UserguardService {
  constructor(
    @InjectRepository(UserGuard)
    private readonly guardRepository: Repository<UserGuard>,
  ) {}

  async createUser(user: any) {
    const register = this.guardRepository.create(user);
    return await this.guardRepository.save(register);
  }

  async getOneUser(name: string, email: string) {
    const result = await this.guardRepository.findOne({
      where: [
        {
          name,
          email,
        }
      ]
    })
    return result
  }

  async getAll() {
    const result = await this.guardRepository.createQueryBuilder('guard_user')
        .select(['id', 'name', 'pictures', 'type_user_id', 'email'])
        .execute();
    return result
  }

  async getById(id: number) {
    const result = await this.guardRepository.createQueryBuilder('guard_user')
        .where('guard_user.id like :id', { id })
        .select(['id', 'name', 'pictures', 'type_user_id', 'email'])
        .execute();
    return result[0];
  }
}
