import { Module } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';
import { CashOutflowController } from '../controller/cash-outflow.controller';
import { CashOutflowService } from '../service/cash-outflow.service';

@Module({
  controllers: [CashOutflowController],
  providers: [CashOutflowService, PrismaService],
})
export class CashOutflowModule {}
