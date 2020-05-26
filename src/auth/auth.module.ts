import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomersModule } from 'src/customers/customers.module';
import { TokenModule } from './token/token.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';


@Module({
    imports: [
      CustomersModule,
      TokenModule,
      ConfigModule,
      PassportModule.register({defaltStrategy:'jwt'}),
      JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1d' },
      }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
  })
  
export class AuthModule {}
