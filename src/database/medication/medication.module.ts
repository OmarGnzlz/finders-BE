import { Module } from '@nestjs/common';
import { MedicationService } from './medication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './entities/medication.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medication])],
  providers: [MedicationService],
  exports: [MedicationService],
})
export class MedicationModule {}
