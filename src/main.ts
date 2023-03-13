import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import CONFIG from './utils/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // TODO: setup CORS properly
    origin: [
      'http://localhost:3000'
    ],
    credentials: true
  })
  await app.listen(CONFIG.PORT);
}
bootstrap();
