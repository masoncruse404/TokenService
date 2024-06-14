import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ["http://localhost:3775","https://project-management.masoncruse.com", "http://project-management.masoncruse.com"],  
    methods: ["GET", "POST", "PUT", "OPTIONS", "DELETE"],
    credentials: true
  });

  await app.listen(3000);
}
bootstrap();
