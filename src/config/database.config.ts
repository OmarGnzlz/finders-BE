import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

function typeormModuleOptions(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: process.env.HOST_DB || 'us-cdbr-east-03.cleardb.com',
    port: parseInt(process.env.PORT_DB) || 3306,
    username: process.env.USER_DB || 'ba3545d6fef034', 
    password: process.env.PASSWORD_DB || '52ab6313',
    database: process.env.DATABASE_DB || 'heroku_d413dc4d2396743',
    entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
    autoLoadEntities: true,
    migrationsRun: true,
    migrations: [join(__dirname, '../migration/**/*{.ts,.js}')],
    migrationsTableName: 'migrations_typeorm',
    cli: {
      migrationsDir: 'src/migrations',
    },
    synchronize: true,
    logging: true,
    logger: 'file',
  };
}

export default registerAs('database', () => ({
  config: typeormModuleOptions(),
}));
