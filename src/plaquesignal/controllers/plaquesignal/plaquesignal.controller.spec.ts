import { Test, TestingModule } from '@nestjs/testing';
import { PlaquesignalController } from './plaquesignal.controller';

describe('PlaquesignalController', () => {
  let controller: PlaquesignalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaquesignalController],
    }).compile();

    controller = module.get<PlaquesignalController>(PlaquesignalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
