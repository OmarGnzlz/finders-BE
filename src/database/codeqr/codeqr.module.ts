import { Module } from '@nestjs/common';
import { CodeqrService } from './codeqr.service';

@Module({
  providers: [CodeqrService],
  exports: [CodeqrService],
})
export class CodeqrModule {}
