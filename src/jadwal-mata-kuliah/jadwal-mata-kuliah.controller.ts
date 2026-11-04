import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JadwalMataKuliahService } from './jadwal-mata-kuliah.service';
import { CreateJadwalMataKuliahDto } from './dto/create-jadwal-mata-kuliah.dto';
import { UpdateJadwalMataKuliahDto } from './dto/update-jadwal-mata-kuliah.dto';

@Controller('jadwal-mata-kuliah')
export class JadwalMataKuliahController {
  constructor(private readonly jadwalMataKuliahService: JadwalMataKuliahService) {}

  @Post()
  create(@Body() createJadwalMataKuliahDto: CreateJadwalMataKuliahDto) {
    return this.jadwalMataKuliahService.create(createJadwalMataKuliahDto);
  }

  @Get()
  findAll() {
    return this.jadwalMataKuliahService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jadwalMataKuliahService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJadwalMataKuliahDto: UpdateJadwalMataKuliahDto) {
    return this.jadwalMataKuliahService.update(id, updateJadwalMataKuliahDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jadwalMataKuliahService.remove(id);
  }
}