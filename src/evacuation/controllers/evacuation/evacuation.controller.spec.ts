import { Test, TestingModule } from '@nestjs/testing';
import { EvacuationController } from './evacuation.controller';

describe('EvacuationController', () => {
  let controller: EvacuationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvacuationController],
    }).compile();

    controller = module.get<EvacuationController>(EvacuationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
