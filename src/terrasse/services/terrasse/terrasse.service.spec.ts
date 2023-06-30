import { Test, TestingModule } from '@nestjs/testing';
import { TerrasseService } from './terrasse.service';

describe('TerrasseService', () => {
  let service: TerrasseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerrasseService],
    }).compile();

    service = module.get<TerrasseService>(TerrasseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
