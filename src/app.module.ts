import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CashInflowModule } from './module/cash-inflow.module';
import { CashOutflowModule } from './module/cash-outflow.module';
import { PermissionModule } from './module/permission.module';
import { RoleModule } from './module/role.module';
import { RefreshTokenModule } from './module/refresh-token.module';
import { AccountEntity } from './entity/account.entity';
import { CashInflowEntity } from './entity/cash-inflow.entity';
import { CashOutflowEntity } from './entity/cash-outflow.entity';
import { PermissionEntity } from './entity/permission.entity';
import { RefreshTokenEntity } from './entity/refreshToken.entity';
import { RoleEntity } from './entity/role.entity';
import { AccountService } from './service/account.service';
import { CashInflowService } from './service/cash-inflow.service';
import { CashOutflowService } from './service/cash-outflow.service';
import { PermissionService } from './service/permission.service';
import { RoleService } from './service/role.service';
import { AccountController } from './controller/account.controller';
import { CashInflowController } from './controller/cash-inflow.controller';
import { CashOutflowController } from './controller/cash-outflow.controller';
import { PermissionController } from './controller/permission.controller';
import { RoleController } from './controller/role.controller';
import { AccountModule } from './module/account.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'finance',
      password: 'finance',
      database: 'finance',
      entities: [
        AccountEntity,
        CashInflowEntity,
        CashOutflowEntity,
        PermissionEntity,
        RefreshTokenEntity,
        RoleEntity,
      ],
      synchronize: false,
    }),
    AccountModule,
    CashInflowModule,
    CashOutflowModule,
    PermissionModule,
    RoleModule,
    RefreshTokenModule,
  ],
  controllers: [
    AccountController,
    CashInflowController,
    CashOutflowController,
    PermissionController,
    RoleController,
  ],
  providers: [
    AccountService,
    CashInflowService,
    CashOutflowService,
    PermissionService,
    RoleService,
    PrismaService,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
