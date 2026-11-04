import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors } from '@nestjs/common';
import { MataKuliahService } from './mata-kuliah.service';
import { CreateMataKuliahDto } from './dto/create-mata-kuliah.dto';
import { UpdateMataKuliahDto } from './dto/update-mata-kuliah.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('mata-kuliah')
export class MataKuliahController {
  constructor(private readonly mataKuliahService: MataKuliahService) {}

  @Post()
  create(@Body() createMataKuliahDto: CreateMataKuliahDto) {
    return this.mataKuliahService.create(createMataKuliahDto);
  }

  @Get()
  @UseInterceptors(CacheInterceptor) 
  findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    if (page && limit) {
      const skip = (Number(page) - 1) * Number(limit);
      const take = Number(limit);
      return this.mataKuliahService.findAll(skip, take);
    }
    return this.mataKuliahService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mataKuliahService.findOne(id); 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMataKuliahDto: UpdateMataKuliahDto) {
    return this.mataKuliahService.update(id, updateMataKuliahDto); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mataKuliahService.remove(id); 
  }
}