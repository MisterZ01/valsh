import { Test, TestingModule } from '@nestjs/testing';
import { SerrureController } from './serrure.controller';

describe('SerrureController', () => {
  let controller: SerrureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SerrureController],
    }).compile();

    controller = module.get<SerrureController>(SerrureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
