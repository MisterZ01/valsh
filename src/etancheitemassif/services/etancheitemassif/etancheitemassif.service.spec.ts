import { Test, TestingModule } from '@nestjs/testing';
import { EtancheitemassifService } from './etancheitemassif.service';

describe('EtancheitemassifService', () => {
  let service: EtancheitemassifService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtancheitemassifService],
    }).compile();

    service = module.get<EtancheitemassifService>(EtancheitemassifService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
