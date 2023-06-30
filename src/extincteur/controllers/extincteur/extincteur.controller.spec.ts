import { Test, TestingModule } from '@nestjs/testing';
import { ExtincteurController } from './extincteur.controller';

describe('ExtincteurController', () => {
  let controller: ExtincteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtincteurController],
    }).compile();

    controller = module.get<ExtincteurController>(ExtincteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
