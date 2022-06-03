import { Module } from '@nestjs/common';
import { PrismaService } from 'src/service/prisma.service';
import { AccountController } from '../controller/account.controller';
import { AccountService } from '../service/account.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService, PrismaService],
})
export class AccountModule {}
