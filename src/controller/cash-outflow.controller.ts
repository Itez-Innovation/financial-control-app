import { Controller } from '@nestjs/common';
import { CashOutflowService } from '../service/cash-outflow.service';

@Controller('cash-outflow')
export class CashOutflowController {
  constructor(private readonly cashOutflowService: CashOutflowService) {}
}
