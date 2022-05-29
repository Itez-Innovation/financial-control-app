import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CashInflowModule } from './cash-inflow/cash-inflow.module';
import { CashOutflowModule } from './cash-outflow/cash-outflow.module';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CashInflowModule, CashOutflowModule, PermissionModule, RoleModule, RefreshTokenModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
