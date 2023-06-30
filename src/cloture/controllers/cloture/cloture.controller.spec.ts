import { Test, TestingModule } from '@nestjs/testing';
import { ClotureController } from './cloture.controller';

describe('ClotureController', () => {
  let controller: ClotureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClotureController],
    }).compile();

    controller = module.get<ClotureController>(ClotureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
