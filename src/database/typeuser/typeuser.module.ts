import { Module } from '@nestjs/common';
import { TypeuserService } from './typeuser.service';

@Module({
  providers: [TypeuserService]
})
export class TypeuserModule {}
