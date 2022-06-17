import { Module } from '@nestjs/common';
import { CashInflowModule } from './module/cash-inflow.module';
import { CashOutflowModule } from './module/cash-outflow.module';
import { PermissionModule } from './module/permission.module';
import { RoleModule } from './module/role.module';
import { RefreshTokenModule } from './module/refresh-token.module';
import { AccountModule } from './module/account.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './module/prisma.module';

@Module({
  imports: [
    AccountModule,
    CashInflowModule,
    CashOutflowModule,
    PermissionModule,
    RoleModule,
    RefreshTokenModule,
    AuthModule,
    PrismaModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
