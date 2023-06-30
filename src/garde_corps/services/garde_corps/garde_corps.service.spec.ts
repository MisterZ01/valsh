import { Test, TestingModule } from '@nestjs/testing';
import { GardeCorpsService } from './garde_corps.service';

describe('GardeCorpsService', () => {
  let service: GardeCorpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GardeCorpsService],
    }).compile();

    service = module.get<GardeCorpsService>(GardeCorpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
