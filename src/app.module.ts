import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    CustomersModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/customers')
    ],
  controllers: [ AuthController],
  providers: [ AuthService],
})
export class AppModule {}
