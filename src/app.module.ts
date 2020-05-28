import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TokenModule } from './auth/token/token.module';




const environment = process.env.NODE_ENV || 'development';



@Module({
  imports: [
    CustomersModule,
    AuthModule,
    TokenModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true, 
    }),
    MongooseModule.forRoot(process.env.MONGODB_WRITE_CONNECTION_STRING,
      {
        useNewUrlParser:true,
        useUnifiedTopology:true
      }
      ),
      
    ],
 
  
  controllers: [ AuthController],
  providers: [ AuthService,  ],
})
export class AppModule {}
