import { Module } from '@nestjs/common';
import { CodeqrService } from './codeqr.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeQr } from './entities/codeqr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CodeQr])],
  providers: [CodeqrService],
  exports: [CodeqrService],
})
export class CodeqrModule {}
