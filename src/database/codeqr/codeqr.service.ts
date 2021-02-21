import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CodeQr } from './entities/codeqr.entity';

@Injectable()
export class CodeqrService {
  constructor(
    @InjectRepository(CodeQr)
    private readonly codeQrRepository: Repository<CodeQr>
  ) {}
}
