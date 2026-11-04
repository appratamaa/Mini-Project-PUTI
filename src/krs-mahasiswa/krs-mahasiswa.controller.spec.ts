import { Test, TestingModule } from '@nestjs/testing';
import { KrsMahasiswaController } from './krs-mahasiswa.controller';
import { KrsMahasiswaService } from './krs-mahasiswa.service';

describe('KrsMahasiswaController', () => {
  let controller: KrsMahasiswaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KrsMahasiswaController],
      providers: [KrsMahasiswaService],
    }).compile();

    controller = module.get<KrsMahasiswaController>(KrsMahasiswaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
