import { Module } from '@nestjs/common';
import { InformationService } from './information.service';

@Module({
  providers: [InformationService]
})
export class InformationModule {}
