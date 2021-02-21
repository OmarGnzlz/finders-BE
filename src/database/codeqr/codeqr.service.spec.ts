import { Test, TestingModule } from '@nestjs/testing';
import { CodeqrService } from './codeqr.service';

describe('CodeqrService', () => {
  let service: CodeqrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeqrService],
    }).compile();

    service = module.get<CodeqrService>(CodeqrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
