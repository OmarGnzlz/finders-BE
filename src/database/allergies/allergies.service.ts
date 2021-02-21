import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Allergies } from './entities/allergies.entity';

@Injectable()
export class AllergiesService {
  constructor(
    @InjectRepository(Allergies)
    private readonly allergiesRepository: Repository<Allergies>
  ) {}
}
