import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';

@Module({
  providers: [InstitutionsService]
})
export class InstitutionsModule {}
