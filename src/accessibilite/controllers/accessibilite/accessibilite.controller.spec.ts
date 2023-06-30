import { Test, TestingModule } from '@nestjs/testing';
import { AccessibiliteController } from './accessibilite.controller';

describe('AccessibiliteController', () => {
  let controller: AccessibiliteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessibiliteController],
    }).compile();

    controller = module.get<AccessibiliteController>(AccessibiliteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
