import { Module } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';
import { CashOutflowController } from '../controller/cash-outflow.controller';
import { CashOutflowService } from '../service/cash-outflow.service';
import { ICASHOUTFLOW_REPOSITORY } from 'src/repository/cashOutflowRepository/ICashOutflowRepository';
import { CashOutflowRepository } from 'src/repository/cashOutflowRepository/CashOutflowRepository';

@Module({
  controllers: [CashOutflowController],
  providers: [
    CashOutflowService,
    PrismaService,
    { provide: ICASHOUTFLOW_REPOSITORY, useClass: CashOutflowRepository },
  ],
  exports: [CashOutflowService],
})
export class CashOutflowModule {}
