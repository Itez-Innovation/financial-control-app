import { Module } from '@nestjs/common';
import { CashInflowController } from './cash-inflow.controller';
import { CashInflowService } from './cash-inflow.service';

@Module({
  controllers: [CashInflowController],
  providers: [CashInflowService]
})
export class CashInflowModule {}
