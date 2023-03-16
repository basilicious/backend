import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import CONFIG from './utils/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // TODO: setup CORS properly
    origin: "*",
    allowedHeaders: "*",
    credentials: true
  })
  await app.listen(CONFIG.PORT);
}
bootstrap();
