import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeUser } from './entities/typeuser.entity';

@Injectable()
export class TypeuserService {
  constructor(
    @InjectRepository(TypeUser)
    private readonly typeUserRepository: Repository<TypeUser>,
  ) {}
}
