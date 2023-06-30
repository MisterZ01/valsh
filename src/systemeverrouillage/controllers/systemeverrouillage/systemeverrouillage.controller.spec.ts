import { Test, TestingModule } from '@nestjs/testing';
import { SystemeverrouillageController } from './systemeverrouillage.controller';

describe('SystemeverrouillageController', () => {
  let controller: SystemeverrouillageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemeverrouillageController],
    }).compile();

    controller = module.get<SystemeverrouillageController>(SystemeverrouillageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
