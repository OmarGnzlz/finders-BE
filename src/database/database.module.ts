import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PositionModule } from './position/position.module';
import { HealthService } from './health/health.service';
import { HealthModule } from './health/health.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { CodeqrModule } from './codeqr/codeqr.module';
import { TypeuserModule } from './typeuser/typeuser.module';

@Module({
  imports: [UserModule, PositionModule, HealthModule, InstitutionsModule, CodeqrModule, TypeuserModule],
  providers: [HealthService]
})
export class DatabaseModule {}
