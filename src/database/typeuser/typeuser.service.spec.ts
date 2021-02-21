import { Test, TestingModule } from '@nestjs/testing';
import { TypeuserService } from './typeuser.service';

describe('TypeuserService', () => {
  let service: TypeuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeuserService],
    }).compile();

    service = module.get<TypeuserService>(TypeuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
