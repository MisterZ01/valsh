import { Test, TestingModule } from '@nestjs/testing';
import { EtancheitesiteService } from './etancheitesite.service';

describe('EtancheitesiteService', () => {
  let service: EtancheitesiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtancheitesiteService],
    }).compile();

    service = module.get<EtancheitesiteService>(EtancheitesiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
