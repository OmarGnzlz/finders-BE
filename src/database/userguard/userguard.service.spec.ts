import { Test, TestingModule } from '@nestjs/testing';
import { UserguardService } from './userguard.service';

describe('UserguardService', () => {
  let service: UserguardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserguardService],
    }).compile();

    service = module.get<UserguardService>(UserguardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
