import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import Moralis from 'moralis';

async function bootstrap() {
  await Moralis.start({
    apiKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImIyNWVhZWVlLWNjNmMtNGI4MS05YTA1LWJkZDJlYzU5YWFkYSIsIm9yZ0lkIjoiNDQzNzM4IiwidXNlcklkIjoiNDU2NTUwIiwidHlwZUlkIjoiOTAyN2JmNTktNWViYS00N2M0LTliYjYtNDg3ODNlZWMxNTgyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NDU1Njk2NzksImV4cCI6NDkwMTMyOTY3OX0.ZNYWSY6QmuYb7lhAjcHqczYB8B5YpkscEgCG7ejQWdU',
  });
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const PORT = process.env.PORT || 8000;
  await app.listen(PORT, '0.0.0.0');
  console.log(`✅ Server is listening on http://0.0.0.0:${PORT}`);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
