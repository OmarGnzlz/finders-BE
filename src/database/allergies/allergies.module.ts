import { Module } from '@nestjs/common';
import { AllergiesService } from './allergies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Allergies } from './entities/allergies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Allergies])],
  providers: [AllergiesService],
  exports: [AllergiesService],
})
export class AllergiesModule {}
