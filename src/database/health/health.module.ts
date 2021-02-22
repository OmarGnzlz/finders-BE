import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthService } from './health.service';
import { Health } from './entities/health.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Health])],
  providers: [HealthService],
  exports: [HealthService],
})
export class HealthModule {}
