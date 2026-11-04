import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDosenDto {
  @IsString()
  @IsNotEmpty()
  nip_dosen: string;

  @IsString()
  @IsNotEmpty()
  nama_dosen: string;
}