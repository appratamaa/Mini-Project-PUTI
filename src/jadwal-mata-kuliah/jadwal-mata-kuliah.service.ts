import { Injectable } from '@nestjs/common';
import { CreateJadwalMataKuliahDto } from './dto/create-jadwal-mata-kuliah.dto';
import { UpdateJadwalMataKuliahDto } from './dto/update-jadwal-mata-kuliah.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JadwalMataKuliahService {
  constructor(private prisma: PrismaService) {}

  create(createJadwalMataKuliahDto: CreateJadwalMataKuliahDto) {
    return this.prisma.jadwalMataKuliah.create({
      data: createJadwalMataKuliahDto,
    });
  }

  // Menampilkan jadwal beserta relasi Dosen dan Mata Kuliah agar datanya lengkap!
  findAll() {
    return this.prisma.jadwalMataKuliah.findMany({
      include: {
        dosen: true,
        mataKuliah: true,
      }
    });
  }

  findOne(id_jadwalMK: string) {
    return this.prisma.jadwalMataKuliah.findUnique({
      where: { id_jadwalMK },
      include: {
        dosen: true,
        mataKuliah: true,
      }
    });
  }

  update(id_jadwalMK: string, updateJadwalMataKuliahDto: UpdateJadwalMataKuliahDto) {
    return this.prisma.jadwalMataKuliah.update({
      where: { id_jadwalMK },
      data: updateJadwalMataKuliahDto,
    });
  }

  remove(id_jadwalMK: string) {
    return this.prisma.jadwalMataKuliah.delete({
      where: { id_jadwalMK },
    });
  }
}