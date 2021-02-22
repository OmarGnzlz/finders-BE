import { Test, TestingModule } from '@nestjs/testing';
import { BloodtypeService } from './bloodtype.service';

describe('BloodtypeService', () => {
  let service: BloodtypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodtypeService],
    }).compile();

    service = module.get<BloodtypeService>(BloodtypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
