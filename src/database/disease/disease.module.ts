import { Module } from '@nestjs/common';
import { DiseaseService } from './disease.service';

@Module({
  providers: [DiseaseService]
})
export class DiseaseModule {}
