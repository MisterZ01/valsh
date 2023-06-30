import { Test, TestingModule } from '@nestjs/testing';
import { LocaltechniqueService } from './localtechnique.service';

describe('LocaltechniqueService', () => {
  let service: LocaltechniqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocaltechniqueService],
    }).compile();

    service = module.get<LocaltechniqueService>(LocaltechniqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
