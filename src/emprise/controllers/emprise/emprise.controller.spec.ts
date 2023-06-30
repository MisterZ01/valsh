import { Test, TestingModule } from '@nestjs/testing';
import { EmpriseController } from './emprise.controller';

describe('EmpriseController', () => {
  let controller: EmpriseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpriseController],
    }).compile();

    controller = module.get<EmpriseController>(EmpriseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
