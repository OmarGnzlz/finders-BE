import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';
import { HealthModuleDB } from '../database/health/health.module'
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../database/user/user.module'
import { BloodtypeModule } from '../database/bloodtype/bloodtype.module'
import { AllergiesModule } from '../database/allergies/allergies.module'
import { DiseaseModule } from '../database/disease/disease.module'
import { MedicationModule } from '../database/medication/medication.module'

@Module({
  imports: [HealthModuleDB, AuthModule,UserModule,BloodtypeModule, AllergiesModule,DiseaseModule, MedicationModule], 
  controllers: [HealthController],
  providers: [HealthService]
})
export class HealthModule {}
