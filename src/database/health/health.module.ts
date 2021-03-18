import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthServiceDB } from './health.service';
import { Health } from './entities/health.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Health])],
  providers: [HealthServiceDB],
  exports: [HealthServiceDB],
})
export class HealthModuleDB {}
