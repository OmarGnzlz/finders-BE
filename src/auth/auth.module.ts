import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserguardModule } from '../database/userguard/userguard.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UserguardModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
