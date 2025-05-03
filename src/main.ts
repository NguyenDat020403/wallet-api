import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import Moralis from 'moralis';

async function bootstrap() {
  await Moralis.start({
    apiKey: process.env.MORALIS_API,
  });
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3333);
  // await app.listen(process.env.PORT ?? 3333);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
