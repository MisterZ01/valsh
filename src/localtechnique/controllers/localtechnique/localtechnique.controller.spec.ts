import { Test, TestingModule } from '@nestjs/testing';
import { LicaltechniqueController } from './localtechnique.controller';

describe('LicaltechniqueController', () => {
  let controller: LicaltechniqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicaltechniqueController],
    }).compile();

    controller = module.get<LicaltechniqueController>(LicaltechniqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
