import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { UserguardModule } from '../database/userguard/userguard.module';
import { TypeuserModule } from '../database/typeuser/typeuser.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [UserguardModule, TypeuserModule, AuthModule],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService],
})
export class RegisterModule {}
