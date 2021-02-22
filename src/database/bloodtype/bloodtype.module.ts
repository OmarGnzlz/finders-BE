import { Module } from '@nestjs/common';
import { BloodtypeService } from './bloodtype.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloodType } from './entities/bloodtype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BloodType])],
  providers: [BloodtypeService],
  exports: [BloodtypeService],
})
export class BloodtypeModule {}
