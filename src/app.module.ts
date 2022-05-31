import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CashInflowModule } from './module/cash-inflow.module';
import { CashOutflowModule } from './module/cash-outflow.module';
import { PermissionModule } from './module/permission.module';
import { RoleModule } from './module/role.module';
import { RefreshTokenModule } from './module/refresh-token.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CashInflowModule, CashOutflowModule, PermissionModule, RoleModule, RefreshTokenModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
