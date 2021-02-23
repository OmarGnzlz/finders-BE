import { Module } from '@nestjs/common';
import { UserguardService } from './userguard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGuard } from './entities/userguard.entity'

@Module({
  imports: [TypeOrmModule.forFeature([UserGuard])],
  providers: [UserguardService],
  exports: [UserguardService],
})
export class UserguardModule {}
