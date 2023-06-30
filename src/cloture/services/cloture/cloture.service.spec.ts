import { Test, TestingModule } from '@nestjs/testing';
import { ClotureService } from './cloture.service';

describe('ClotureService', () => {
  let service: ClotureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClotureService],
    }).compile();

    service = module.get<ClotureService>(ClotureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
