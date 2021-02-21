import { Module } from '@nestjs/common';
import { BloodtypeService } from './bloodtype.service';

@Module({
  providers: [BloodtypeService]
})
export class BloodtypeModule {}
