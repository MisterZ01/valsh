import { Test, TestingModule } from '@nestjs/testing';
import { SerrureService } from './serrure.service';

describe('SerrureService', () => {
  let service: SerrureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerrureService],
    }).compile();

    service = module.get<SerrureService>(SerrureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
