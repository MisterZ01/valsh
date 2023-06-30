import { Test, TestingModule } from '@nestjs/testing';
import { AccessibiliteService } from './accessibilite.service';

describe('AccessibiliteService', () => {
  let service: AccessibiliteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessibiliteService],
    }).compile();

    service = module.get<AccessibiliteService>(AccessibiliteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
