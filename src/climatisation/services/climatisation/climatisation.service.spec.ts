import { Test, TestingModule } from '@nestjs/testing';
import { ClimatisationService } from './climatisation.service';

describe('ClimatisationService', () => {
  let service: ClimatisationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClimatisationService],
    }).compile();

    service = module.get<ClimatisationService>(ClimatisationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
