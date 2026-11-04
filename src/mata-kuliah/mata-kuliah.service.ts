import { Injectable } from '@nestjs/common';
import { CreateMataKuliahDto } from './dto/create-mata-kuliah.dto';
import { UpdateMataKuliahDto } from './dto/update-mata-kuliah.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MataKuliahService {
  // <-- Injeksi PrismaService
  constructor(private prisma: PrismaService) {}

  create(createMataKuliahDto: CreateMataKuliahDto) {
    return this.prisma.mataKuliah.create({
      data: createMataKuliahDto,
    });
  }

  findAll() {
    return this.prisma.mataKuliah.findMany();
  }

  findOne(id_mk: string) { 
    return this.prisma.mataKuliah.findUnique({
      where: { id_mk },
    });
  }

  update(id_mk: string, updateMataKuliahDto: UpdateMataKuliahDto) { 
    return this.prisma.mataKuliah.update({
      where: { id_mk },
      data: updateMataKuliahDto,
    });
  }

  remove(id_mk: string) { 
    return this.prisma.mataKuliah.delete({
      where: { id_mk },
    });
  }
}