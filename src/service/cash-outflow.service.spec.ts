import { Test, TestingModule } from '@nestjs/testing';
import { CashOutflowService } from './cash-outflow.service';

describe('CashOutflowService', () => {
  let service: CashOutflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashOutflowService],
    }).compile();

    service = module.get<CashOutflowService>(CashOutflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
