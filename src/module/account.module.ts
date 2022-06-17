import { Module } from '@nestjs/common';
import AccountRepository from 'src/repository/accountRepository/AccountRepository';
import { IACCOUNT_REPOSITORY } from 'src/repository/accountRepository/IAccountRepository';
import { IPERMISSION_REPOSITORY } from 'src/repository/permissionRepository/IPermissionRepository';
import PermissionRepository from 'src/repository/permissionRepository/PermissionRepository';
import { IROLE_REPOSITORY } from 'src/repository/roleRepository/IRoleRepository';
import RoleRepository from 'src/repository/roleRepository/RoleRepository';
import { ITOKEN_REPOSITORY } from 'src/repository/tokenRepository/ITokenRepository';
import TokenRepository from 'src/repository/tokenRepository/TokenRepository';
import { PrismaService } from 'src/service/prisma.service';
import { AccountController } from '../controller/account.controller';
import AccountService from '../service/account.service';

@Module({
  controllers: [AccountController],
  providers: [
    AccountService,
    PrismaService,
    { provide: IACCOUNT_REPOSITORY, useClass: AccountRepository },
    { provide: ITOKEN_REPOSITORY, useClass: TokenRepository },
    { provide: IPERMISSION_REPOSITORY, useClass: PermissionRepository },
    { provide: IROLE_REPOSITORY, useClass: RoleRepository },
  ],
  exports: [AccountService],
})
export class AccountModule {}
