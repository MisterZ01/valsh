import { Test, TestingModule } from '@nestjs/testing';
import { PlaquesignalService } from './plaquesignal.service';

describe('PlaquesignalService', () => {
  let service: PlaquesignalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaquesignalService],
    }).compile();

    service = module.get<PlaquesignalService>(PlaquesignalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
