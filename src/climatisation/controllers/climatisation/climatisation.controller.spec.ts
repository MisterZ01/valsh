import { Test, TestingModule } from '@nestjs/testing';
import { ClimatisationController } from './climatisation.controller';

describe('ClimatisationController', () => {
  let controller: ClimatisationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClimatisationController],
    }).compile();

    controller = module.get<ClimatisationController>(ClimatisationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
