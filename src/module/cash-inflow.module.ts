import { Module } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';
import { CashInflowController } from '../controller/cash-inflow.controller';
import { CashInflowService } from '../service/cash-inflow.service';
import { ICASHINFLOW_REPOSITORY } from 'src/repository/cashInflowRepository/ICashInflowRepository';
import CashInflowRepository from 'src/repository/cashInflowRepository/CashInflowRepository';

@Module({
  controllers: [CashInflowController],
  providers: [
    CashInflowService,
    PrismaService,
    { provide: ICASHINFLOW_REPOSITORY, useClass: CashInflowRepository },
  ],
  exports: [CashInflowService],
})
export class CashInflowModule {}
