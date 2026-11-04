import { Test, TestingModule } from '@nestjs/testing';
import { JadwalMataKuliahService } from './jadwal-mata-kuliah.service';

describe('JadwalMataKuliahService', () => {
  let service: JadwalMataKuliahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JadwalMataKuliahService],
    }).compile();

    service = module.get<JadwalMataKuliahService>(JadwalMataKuliahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
