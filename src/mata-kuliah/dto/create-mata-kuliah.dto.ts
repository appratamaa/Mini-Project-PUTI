import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateMataKuliahDto {
  @IsString()
  @IsNotEmpty()
  kode_mk: string;

  @IsString()
  @IsNotEmpty()
  nama_mk: string;

  @IsInt()
  sks: number;
}