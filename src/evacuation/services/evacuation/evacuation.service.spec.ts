import { Test, TestingModule } from '@nestjs/testing';
import { EvacuationService } from './evacuation.service';

describe('EvacuationService', () => {
  let service: EvacuationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvacuationService],
    }).compile();

    service = module.get<EvacuationService>(EvacuationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
