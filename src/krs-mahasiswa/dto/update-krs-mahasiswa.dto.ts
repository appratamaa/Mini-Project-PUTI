import { PartialType } from '@nestjs/mapped-types';
import { CreateKrsMahasiswaDto } from './create-krs-mahasiswa.dto';

export class UpdateKrsMahasiswaDto extends PartialType(CreateKrsMahasiswaDto) {}
