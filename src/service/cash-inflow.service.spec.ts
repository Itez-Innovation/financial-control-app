import { Test, TestingModule } from '@nestjs/testing';
import { CashInflowService } from './cash-inflow.service';

describe('CashInflowService', () => {
  let service: CashInflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashInflowService],
    }).compile();

    service = module.get<CashInflowService>(CashInflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
