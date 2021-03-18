import { Injectable, Res } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Health } from './entities/health.entity';
@Injectable()
export class HealthServiceDB {
  constructor(
    @InjectRepository(Health)
    private readonly healthRepository: Repository<Health>,
  ) {}

  async createhHealthInfo(health: any) {
    const register = this.healthRepository.create(health);
    return await this.healthRepository.save(register);
  }

  async geInfo(id: any){
    const result = await this.healthRepository
      .createQueryBuilder('health')
      .where('health.id like :id', { id })
      .select(['institutions_id', 'allergies', 'diseases', 'medication', 'blood_type'])
      .execute()
      return result
  }
  
  async geUserInfo(user_id: any){
    const result = await this.healthRepository.findOne({
      where: [
        {
          user_id
        }
      ]
    });
    return result
  }

}
