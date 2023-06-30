import { Test, TestingModule } from '@nestjs/testing';
import { EmpriseService } from './emprise.service';

describe('EmpriseService', () => {
  let service: EmpriseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpriseService],
    }).compile();

    service = module.get<EmpriseService>(EmpriseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
