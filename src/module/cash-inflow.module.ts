import { Module } from '@nestjs/common';
import { CashInflowController } from '../controller/cash-inflow.controller';
import { CashInflowService } from '../service/cash-inflow.service';

@Module({
  controllers: [CashInflowController],
  providers: [CashInflowService]
})
export class CashInflowModule {}
