import { Controller } from '@nestjs/common';
import { CashInflowService } from '../service/cash-inflow.service';

@Controller('cash-inflow')
export class CashInflowController {
  constructor(private readonly cashInflowService: CashInflowService) {}
}
