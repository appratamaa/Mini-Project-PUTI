import { Test, TestingModule } from '@nestjs/testing';
import { KrsMahasiswaService } from './krs-mahasiswa.service';

describe('KrsMahasiswaService', () => {
  let service: KrsMahasiswaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KrsMahasiswaService],
    }).compile();

    service = module.get<KrsMahasiswaService>(KrsMahasiswaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
