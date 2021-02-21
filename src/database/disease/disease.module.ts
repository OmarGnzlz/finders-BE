import { Module } from '@nestjs/common';
import { DiseaseService } from './disease.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disease } from './entities/disease.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Disease])],
  providers: [DiseaseService],
  exports: [DiseaseService],
})
export class DiseaseModule {}
