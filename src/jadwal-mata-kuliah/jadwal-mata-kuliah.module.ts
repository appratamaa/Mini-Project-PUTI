import { Module } from '@nestjs/common';
import { JadwalMataKuliahService } from './jadwal-mata-kuliah.service';
import { JadwalMataKuliahController } from './jadwal-mata-kuliah.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [JadwalMataKuliahController],
  providers: [JadwalMataKuliahService],
})
export class JadwalMataKuliahModule {}