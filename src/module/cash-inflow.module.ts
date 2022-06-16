import { Module } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';
import { CashInflowController } from '../controller/cash-inflow.controller';
import { CashInflowService } from '../service/cash-inflow.service';

@Module({
  controllers: [CashInflowController],
  providers: [CashInflowService, PrismaService],
})
export class CashInflowModule {}
