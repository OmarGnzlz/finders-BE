import { Module } from '@nestjs/common';
import { AllergiesService } from './allergies.service';

@Module({
  providers: [AllergiesService]
})
export class AllergiesModule {}
