import { Test, TestingModule } from '@nestjs/testing';
import { JadwalMataKuliahController } from './jadwal-mata-kuliah.controller';
import { JadwalMataKuliahService } from './jadwal-mata-kuliah.service';

describe('JadwalMataKuliahController', () => {
  let controller: JadwalMataKuliahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JadwalMataKuliahController],
      providers: [JadwalMataKuliahService],
    }).compile();

    controller = module.get<JadwalMataKuliahController>(JadwalMataKuliahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
