import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});

  const options = new DocumentBuilder()
  .setTitle('Customers API')
  .setDescription('The Customers API description')
  .setVersion('1.0')
  .addTag('Customers')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
