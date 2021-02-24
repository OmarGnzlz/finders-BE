import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { UserGuard } from '../database/userguard/entities/userguard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserGuard])],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
