import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { InformationModule } from './information/information.module';

@Module({
  imports: [LoginModule, AuthModule, DatabaseModule, InformationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
