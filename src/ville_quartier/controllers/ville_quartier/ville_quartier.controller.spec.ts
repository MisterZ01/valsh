import { Test, TestingModule } from '@nestjs/testing';
import { VilleQuartierController } from './ville_quartier.controller';

describe('VilleQuartierController', () => {
  let controller: VilleQuartierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VilleQuartierController],
    }).compile();

    controller = module.get<VilleQuartierController>(VilleQuartierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
