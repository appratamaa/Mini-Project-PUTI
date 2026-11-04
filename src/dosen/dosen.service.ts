import { Injectable } from '@nestjs/common';
import { CreateDosenDto } from './dto/create-dosen.dto';
import { UpdateDosenDto } from './dto/update-dosen.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DosenService {
  constructor(private prisma: PrismaService) {}

  create(createDosenDto: CreateDosenDto) {
    return this.prisma.dosen.create({
      data: createDosenDto,
    });
  }

  findAll() {
    return this.prisma.dosen.findMany();
  }

  findOne(id_dosen: string) {
    return this.prisma.dosen.findUnique({
      where: { id_dosen },
    });
  }

  update(id_dosen: string, updateDosenDto: UpdateDosenDto) {
    return this.prisma.dosen.update({
      where: { id_dosen },
      data: updateDosenDto,
    });
  }

  remove(id_dosen: string) {
    return this.prisma.dosen.delete({
      where: { id_dosen },
    });
  }
}