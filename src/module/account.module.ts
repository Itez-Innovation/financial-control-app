import { Module } from '@nestjs/common';
import AccountRepository from 'src/repository/accountRepository/AccountRepository';
import { IACCOUNT_REPOSITORY } from 'src/repository/accountRepository/IAccountRepository';
import { AccountController } from '../controller/account.controller';
import AccountService from '../service/account.service';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [
    AccountService,
    { provide: IACCOUNT_REPOSITORY, useClass: AccountRepository },
  ],
  exports: [AccountService],
})
export class AccountModule {}
