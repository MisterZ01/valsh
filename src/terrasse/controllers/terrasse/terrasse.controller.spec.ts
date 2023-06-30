import { Test, TestingModule } from '@nestjs/testing';
import { TerrasseController } from './terrasse.controller';

describe('TerrasseController', () => {
  let controller: TerrasseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerrasseController],
    }).compile();

    controller = module.get<TerrasseController>(TerrasseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
