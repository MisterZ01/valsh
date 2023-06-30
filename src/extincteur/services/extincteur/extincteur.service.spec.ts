import { Test, TestingModule } from '@nestjs/testing';
import { ExtincteurService } from './extincteur.service';

describe('ExtincteurService', () => {
  let service: ExtincteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtincteurService],
    }).compile();

    service = module.get<ExtincteurService>(ExtincteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
