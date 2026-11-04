import { PartialType } from '@nestjs/mapped-types';
import { CreateJadwalMataKuliahDto } from './create-jadwal-mata-kuliah.dto';

export class UpdateJadwalMataKuliahDto extends PartialType(CreateJadwalMataKuliahDto) {}
