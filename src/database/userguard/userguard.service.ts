import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserGuard } from './entities/userguard.entity';

@Injectable()
export class UserguardService {
  constructor(
    @InjectRepository(UserGuard)
    private readonly guardRepository: Repository<UserGuard>
  ) {}
}
