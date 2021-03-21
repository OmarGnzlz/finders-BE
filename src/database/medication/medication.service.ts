import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Medication } from './entities/medication.entity';

@Injectable()
export class MedicationService {
  constructor(
    @InjectRepository(Medication)
    private readonly medicationRepository: Repository<Medication>,
  ) {}

  async getMedication(id: any){
    const result = await this.medicationRepository.findOne({
      where: [
        {
          id
        }
      ]
    });
    return result
  }
}
