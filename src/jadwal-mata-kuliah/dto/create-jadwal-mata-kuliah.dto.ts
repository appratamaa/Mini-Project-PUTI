import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateJadwalMataKuliahDto {
  @IsUUID() @IsNotEmpty()
  id_dosen: string;

  @IsUUID() @IsNotEmpty()
  id_mk: string;

  @IsString() @IsNotEmpty()
  hari: string;

  @IsString() @IsNotEmpty()
  jam_mulai: string;

  @IsString() @IsNotEmpty()
  jam_selesai: string;

  @IsString() @IsNotEmpty()
  ruangan: string;
}