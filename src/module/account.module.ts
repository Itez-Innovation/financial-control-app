import { Module } from '@nestjs/common';
import AccountRepository from 'src/repository/accountRepository/AccountRepository';
import PermissionRepository from 'src/repository/permissionRepository/PermissionRepository';
import RoleRepository from 'src/repository/roleRepository/RoleRepository';
import TokenRepository from 'src/repository/tokenRepository/TokenRepository';
import { PrismaService } from 'src/service/prisma.service';
import { AccountController } from '../controller/account.controller';
import { AccountService } from '../service/account.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService, PrismaService],
  imports: [
    AccountRepository,
    TokenRepository,
    PermissionRepository,
    RoleRepository,
  ],
})
export class AccountModule {}
