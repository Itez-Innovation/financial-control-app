import { Module } from '@nestjs/common';
import { AccountController } from '../controller/account.controller';
import { AccountService } from '../service/account.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
