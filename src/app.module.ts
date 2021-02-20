import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LoginModule, AuthModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
