import { Test, TestingModule } from '@nestjs/testing';
import { VilleQuartierService } from './ville_quartier.service';

describe('VilleQuartierService', () => {
  let service: VilleQuartierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VilleQuartierService],
    }).compile();

    service = module.get<VilleQuartierService>(VilleQuartierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
