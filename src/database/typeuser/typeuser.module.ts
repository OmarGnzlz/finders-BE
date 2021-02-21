import { Module } from '@nestjs/common';
import { TypeuserService } from './typeuser.service';

@Module({
  providers: [TypeuserService],
  exports: [TypeuserService],
})
export class TypeuserModule {}
