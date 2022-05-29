import { Module } from '@nestjs/common';
import { CashOutflowController } from './cash-outflow.controller';
import { CashOutflowService } from './cash-outflow.service';

@Module({
  controllers: [CashOutflowController],
  providers: [CashOutflowService]
})
export class CashOutflowModule {}
