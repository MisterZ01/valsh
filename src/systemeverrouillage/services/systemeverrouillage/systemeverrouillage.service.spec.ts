import { Test, TestingModule } from '@nestjs/testing';
import { SystemeverrouillageService } from './systemeverrouillage.service';

describe('SystemeverrouillageService', () => {
  let service: SystemeverrouillageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemeverrouillageService],
    }).compile();

    service = module.get<SystemeverrouillageService>(SystemeverrouillageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
