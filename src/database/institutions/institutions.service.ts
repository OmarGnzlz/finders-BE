import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Institutions } from './entities/institutions.entity';

@Injectable()
export class InstitutionsService {
  constructor(
    @InjectRepository(Institutions)
    private readonly institutionsRepository: Repository<Institutions>,
  ) {}
}
