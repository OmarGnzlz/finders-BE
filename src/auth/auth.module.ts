import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';
import { JwtStrategy } from './jwt.strategy';
import configSecret from '../config/config';
import * as Joi from '@hapi/joi';
import { UserModule } from '../database/user/user.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expires },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configSecret],
      envFilePath: `.env`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
      }),
    }),
    UserModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtStrategy],
})
export class AuthModule {}
