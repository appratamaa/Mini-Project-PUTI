import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
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
import { CacheModule } from '@nestjs/cache-manager'; 
import { LoggerMiddleware } from './common/middleware/logger.middleware'; 

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
  
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
  
    CacheModule.register({ isGlobal: true, ttl: 10000 }), 
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
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); 
  }
}