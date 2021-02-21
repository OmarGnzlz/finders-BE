import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Joi from '@hapi/joi';

import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { InformationModule } from './information/information.module';

import databaseConfig from './config/database.config'
import configSecret from './config/config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig,
        configSecret
      ],
      envFilePath: `.env`,
      validationSchema: Joi.object({ 
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development')
      }),
    }),
    LoginModule, 
    AuthModule, 
    InformationModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
