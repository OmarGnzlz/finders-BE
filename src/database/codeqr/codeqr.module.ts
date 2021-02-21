import { Module } from '@nestjs/common';
import { CodeqrService } from './codeqr.service';

@Module({
  providers: [CodeqrService]
})
export class CodeqrModule {}
