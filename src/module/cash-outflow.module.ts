import { Module } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';
import { CashOutflowController } from '../controller/cash-outflow.controller';
import { CashOutflowService } from '../service/cash-outflow.service';
import CashOutflowRepository from 'src/repository/cashOutflowRepository/CashOutflowRepository';

@Module({
  controllers: [CashOutflowController],
  providers: [CashOutflowService, PrismaService],
  imports: [CashOutflowRepository],
})
export class CashOutflowModule {}
