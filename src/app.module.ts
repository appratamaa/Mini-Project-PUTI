import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DosenModule } from './dosen/dosen.module';
import { MataKuliahModule } from './mata-kuliah/mata-kuliah.module';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { JadwalMataKuliahModule } from './jadwal-mata-kuliah/jadwal-mata-kuliah.module';
import { KrsMahasiswaModule } from './krs-mahasiswa/krs-mahasiswa.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler'; 
import { APP_GUARD } from '@nestjs/core'; 

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // Konfigurasi Rate Limit: Maksimal 10 request per 60 detik (1 menit) untuk 1 IP
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
    PrismaModule,
    DosenModule,
    MataKuliahModule,
    MahasiswaModule,
    JadwalMataKuliahModule,
    KrsMahasiswaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard, 
    },
  ],
})
export class AppModule {}