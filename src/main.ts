import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common'; 
import helmet from 'helmet';
import { AllExceptionsFilter } from './common/filters/http-exception.filter'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); 

  app.use(helmet()); 

  app.setGlobalPrefix('api/v1'); 

  app.useGlobalPipes(new ValidationPipe()); 

  app.useGlobalFilters(new AllExceptionsFilter()); 

  const config = new DocumentBuilder()
    .setTitle('API Penjadwalan - PUTI')
    .setDescription('REST API untuk Sistem Penjadwalan Mata Kuliah (Mini Project Backend)')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); 

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();