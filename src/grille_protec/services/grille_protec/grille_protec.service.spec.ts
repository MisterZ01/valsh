import { Test, TestingModule } from '@nestjs/testing';
import { GrilleProtecService } from './grille_protec.service';

describe('GrilleProtecService', () => {
  let service: GrilleProtecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrilleProtecService],
    }).compile();

    service = module.get<GrilleProtecService>(GrilleProtecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
