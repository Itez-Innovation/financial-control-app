import { Module } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';
import { CashInflowController } from '../controller/cash-inflow.controller';
import { CashInflowService } from '../service/cash-inflow.service';
import CashInflowRepository from 'src/repository/cashInflowRepository/CashInflowRepository';

@Module({
  controllers: [CashInflowController],
  providers: [CashInflowService, PrismaService],
  imports: [CashInflowRepository],
})
export class CashInflowModule {}
