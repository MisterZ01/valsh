import { Test, TestingModule } from '@nestjs/testing';
import { PortailService } from './portail.service';

describe('PortailService', () => {
  let service: PortailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortailService],
    }).compile();

    service = module.get<PortailService>(PortailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
