import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from './token/token.service';
import { CustomersService } from 'src/customers/customers.service';
import { CreateCustomersDto } from 'src/customers/dto/create-customer.dto';
import { SignOptions } from 'jsonwebtoken';
import { CreateUserTokenDto } from './token/dto/create-user-token.dto';

@Injectable()
export class AuthService {
    constructor(
      private readonly tokenService: TokenService,
      private readonly jwtService: JwtService,
      private readonly customerService: CustomersService
      ) {}
      
    signUp(createCustomersDto: CreateCustomersDto) {

    }

    signIn(email, password) {

    }
    private async generateToken (data, options?: SignOptions): Promise<string>{
      return this.jwtService.sign(data, options);
    }
    private async verifyToken(token):Promise<any>{
      try{
        const data = this.jwtService.verify(token);
        const tokenExists = await this.tokenService.exists(data._id, token);
        if (tokenExists) {
          return data;
      }
      throw new UnauthorizedException();
      }catch (error) {
        throw new UnauthorizedException();
    }
  }
    private async saveToken(createUserTokenDto: CreateUserTokenDto) {
      const customerToken = await this.tokenService.create(createUserTokenDto);

      return customerToken;
    }
      
}

