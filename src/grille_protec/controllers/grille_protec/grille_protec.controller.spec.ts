import { Test, TestingModule } from '@nestjs/testing';
import { GrilleProtecController } from './grille_protec.controller';

describe('GrilleProtecController', () => {
  let controller: GrilleProtecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrilleProtecController],
    }).compile();

    controller = module.get<GrilleProtecController>(GrilleProtecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
