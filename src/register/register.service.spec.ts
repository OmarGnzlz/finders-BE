import { Test, TestingModule } from '@nestjs/testing';
import { RegisterService } from './register.service';
import { UserguardModule } from '../database/userguard/userguard.module';
import { TypeuserModule } from '../database/typeuser/typeuser.module';
import { AuthModule } from '../auth/auth.module';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserGuard } from '../database/userguard/entities/userguard.entity';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
});

describe('RegisterService', () => {
  let service: RegisterService;
  let userguardRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserguardModule, TypeuserModule, AuthModule],
      providers: [
        RegisterService,
        {
          provide: getRepositoryToken(UserGuard),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    userguardRepository = module.get<MockRepository>(
      getRepositoryToken(UserGuard),
    );
    service = module.get<RegisterService>(RegisterService);
  });

  it('it be defined', () => {
    expect(service).toBeDefined();
  });

  it('should validate email and return false', () => {
    const rta = false;
    const email = 'ingecarlos.gutierrez@gmail.com';
    expect(service.validateEmail(email)).toBe(rta);
  });

  it('should validate email and return "email"', () => {
    const rta = 'email';
    const email = 'ingecarlos.gutierrezgmail.com';
    expect(service.validateEmail(email)).toBe(rta);
  });

  it('should validate email and return "email"', () => {
    const rta = 'email';
    const email = 'ingecarlos.gutierrez@@gmail.com';
    expect(service.validateEmail(email)).toBe(rta);
  });
});
