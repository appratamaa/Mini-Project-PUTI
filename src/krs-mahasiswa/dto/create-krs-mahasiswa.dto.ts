import { IsUUID, IsNotEmpty } from 'class-validator';

export class CreateKrsMahasiswaDto {
  @IsUUID() @IsNotEmpty()
  id_mahasiswa: string;

  @IsUUID() @IsNotEmpty()
  id_jadwalMK: string;
}