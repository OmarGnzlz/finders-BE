import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institutions } from './entities/institutions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institutions])],
  providers: [InstitutionsService],
  exports: [InstitutionsService],
})
export class InstitutionsModule {}
