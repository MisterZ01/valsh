import { Test, TestingModule } from '@nestjs/testing';
import { EtancheitemassifController } from './etancheitemassif.controller';

describe('EtancheitemassifController', () => {
  let controller: EtancheitemassifController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtancheitemassifController],
    }).compile();

    controller = module.get<EtancheitemassifController>(EtancheitemassifController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
