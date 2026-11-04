import { Module } from '@nestjs/common';
import { KrsMahasiswaService } from './krs-mahasiswa.service';
import { KrsMahasiswaController } from './krs-mahasiswa.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [KrsMahasiswaController],
  providers: [KrsMahasiswaService],
})
export class KrsMahasiswaModule {}