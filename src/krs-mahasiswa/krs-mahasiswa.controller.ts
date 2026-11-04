import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KrsMahasiswaService } from './krs-mahasiswa.service';
import { CreateKrsMahasiswaDto } from './dto/create-krs-mahasiswa.dto';
import { UpdateKrsMahasiswaDto } from './dto/update-krs-mahasiswa.dto';

@Controller('krs-mahasiswa')
export class KrsMahasiswaController {
  constructor(private readonly krsMahasiswaService: KrsMahasiswaService) {}

  @Post()
  create(@Body() createKrsMahasiswaDto: CreateKrsMahasiswaDto) {
    return this.krsMahasiswaService.create(createKrsMahasiswaDto);
  }

  @Get()
  findAll() {
    return this.krsMahasiswaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.krsMahasiswaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKrsMahasiswaDto: UpdateKrsMahasiswaDto) {
    return this.krsMahasiswaService.update(id, updateKrsMahasiswaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.krsMahasiswaService.remove(id);
  }
}