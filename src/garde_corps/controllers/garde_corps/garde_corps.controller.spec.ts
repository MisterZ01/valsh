import { Test, TestingModule } from '@nestjs/testing';
import { GardeCorpsController } from './garde_corps.controller';

describe('GardeCorpsController', () => {
  let controller: GardeCorpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GardeCorpsController],
    }).compile();

    controller = module.get<GardeCorpsController>(GardeCorpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
