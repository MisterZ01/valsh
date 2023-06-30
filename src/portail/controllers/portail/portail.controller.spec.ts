import { Test, TestingModule } from '@nestjs/testing';
import { PortailController } from './portail.controller';

describe('PortailController', () => {
  let controller: PortailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortailController],
    }).compile();

    controller = module.get<PortailController>(PortailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
