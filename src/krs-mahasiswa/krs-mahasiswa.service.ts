import { Injectable } from '@nestjs/common';
import { CreateKrsMahasiswaDto } from './dto/create-krs-mahasiswa.dto';
import { UpdateKrsMahasiswaDto } from './dto/update-krs-mahasiswa.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class KrsMahasiswaService {
  constructor(private prisma: PrismaService) {}

  create(createKrsMahasiswaDto: CreateKrsMahasiswaDto) {
    return this.prisma.kRS_Mahasiswa.create({
      data: createKrsMahasiswaDto,
    });
  }

  // Menampilkan data KRS beserta detail Mahasiswa dan Jadwalnya
  findAll() {
    return this.prisma.kRS_Mahasiswa.findMany({
      include: {
        mahasiswa: true,
        jadwal: {
          include: {
            mataKuliah: true,
            dosen: true
          }
        }
      }
    });
  }

  findOne(id_krs: string) {
    return this.prisma.kRS_Mahasiswa.findUnique({
      where: { id_krs },
      include: {
        mahasiswa: true,
        jadwal: {
          include: {
            mataKuliah: true,
            dosen: true
          }
        }
      }
    });
  }

  update(id_krs: string, updateKrsMahasiswaDto: UpdateKrsMahasiswaDto) {
    return this.prisma.kRS_Mahasiswa.update({
      where: { id_krs },
      data: updateKrsMahasiswaDto,
    });
  }

  remove(id_krs: string) {
    return this.prisma.kRS_Mahasiswa.delete({
      where: { id_krs },
    });
  }
}