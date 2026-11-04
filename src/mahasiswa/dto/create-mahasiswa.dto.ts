import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMahasiswaDto {
  @IsString()
  @IsNotEmpty()
  nim: string;

  @IsString()
  @IsNotEmpty()
  nama_mahasiswa: string;

  @IsString()
  @IsNotEmpty()
  prodi: string;
}