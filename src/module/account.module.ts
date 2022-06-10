import { Module } from '@nestjs/common';
import AccountRepository from 'src/repository/accountRepository/AccountRepository';
import { PrismaService } from 'src/service/prisma.service';
import { AccountController } from '../controller/account.controller';
import { AccountService } from '../service/account.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService, PrismaService, AccountRepository],
})
export class AccountModule {}
