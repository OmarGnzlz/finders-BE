import { Test, TestingModule } from '@nestjs/testing';
import { RegisterPatientService } from './register-patient.service';

describe('RegisterPatientService', () => {
  let service: RegisterPatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterPatientService],
    }).compile();

    service = module.get<RegisterPatientService>(RegisterPatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
