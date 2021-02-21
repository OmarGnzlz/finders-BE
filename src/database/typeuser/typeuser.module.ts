import { Module } from '@nestjs/common';
import { TypeuserService } from './typeuser.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeUser } from './entities/typeuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeUser])],
  providers: [TypeuserService],
  exports: [TypeuserService],
})
export class TypeuserModule {}
