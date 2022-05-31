import { Module } from '@nestjs/common';
import { CashOutflowController } from '../controller/cash-outflow.controller';
import { CashOutflowService } from '../service/cash-outflow.service';

@Module({
  controllers: [CashOutflowController],
  providers: [CashOutflowService]
})
export class CashOutflowModule {}
