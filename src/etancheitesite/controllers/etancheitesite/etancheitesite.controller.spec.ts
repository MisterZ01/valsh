import { Test, TestingModule } from '@nestjs/testing';
import { EtancheitesiteController } from './etancheitesite.controller';

describe('EtancheitesiteController', () => {
  let controller: EtancheitesiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtancheitesiteController],
    }).compile();

    controller = module.get<EtancheitesiteController>(EtancheitesiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
