import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BloodType } from './entities/bloodtype.entity';

@Injectable()
export class BloodtypeService {
  constructor(
    @InjectRepository(BloodType)
    private readonly bloodTypeRepository: Repository<BloodType>,
  ) {}

  async getBloodType(id: any){
    const result = await this.bloodTypeRepository.findOne({
      where: [
        {
          id
        }
      ]
    });
    return result
  }
}
