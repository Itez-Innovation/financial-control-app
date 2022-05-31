import { Test, TestingModule } from '@nestjs/testing';
import { CashInflowController } from '../src/controller/cash-inflow.controller';

describe('CashInflowController', () => {
  let controller: CashInflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashInflowController],
    }).compile();

    controller = module.get<CashInflowController>(CashInflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
