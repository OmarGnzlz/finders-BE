import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegisterService } from './register/register.service';
import { RegisterModule } from './register/register.module';
import { InformationModule } from './information/information.module';

@Module({
  imports: [LoginModule, RegisterModule, InformationModule],
  providers: [RegisterService]
})
export class DatabaseModule {}
