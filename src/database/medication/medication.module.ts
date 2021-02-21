import { Module } from '@nestjs/common';
import { MedicationService } from './medication.service';

@Module({
  providers: [MedicationService]
})
export class MedicationModule {}
