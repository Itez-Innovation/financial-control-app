import { Test, TestingModule } from '@nestjs/testing';
import { CashOutflowController } from './cash-outflow.controller';

describe('CashOutflowController', () => {
  let controller: CashOutflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashOutflowController],
    }).compile();

    controller = module.get<CashOutflowController>(CashOutflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
