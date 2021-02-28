import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserguardModule } from '../database/userguard/userguard.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { TypeuserModule } from '../database/typeuser/typeuser.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UserguardModule, 
    PassportModule, 
    TypeuserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '12h'
      },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
