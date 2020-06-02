import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from './token/token.service';
import { CustomersService } from 'src/customers/customers.service';
import { CreateCustomersDto } from 'src/customers/dto/create-customer.dto';
import { SignOptions } from 'jsonwebtoken';
import { CreateUserTokenDto } from './token/dto/create-user-token.dto';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import moment from 'moment';
import { SingInDto } from './token/dto/singnin.dto';
import { IReadableUser } from './token/interface/IReadableUser';
import { ItokenPayLoad } from './token/interface/token-playload.interface';

@Injectable()
export class AuthService {
    constructor(
      private readonly tokenService: TokenService,
      private readonly jwtService: JwtService,
      private readonly customerService: CustomersService,
      private readonly configService: ConfigService,
      ) {}
      

    async signIn({email, password}:SingInDto):Promise<IReadableUser> {
      const user = await this.customerService.findByEmail(email)

      if (user && (await bcrypt.compare(password, user.password))){
        const tokenPayload: ItokenPayLoad = {
          id: user.id,
          roles: user.role
        };
        const token = await this.generateToken(tokenPayload);
        const expireAt = moment()
        .add(1,'day')
        .toISOString();
        
        await this.saveToken({
          token,
          expireAt,
          uId: user.id
        });
        const readeUser = user.toObject() as IReadableUser;
        readeUser.accesseToken = token;
      
      }
      throw new BadRequestException("Неверный логин или пароль")

    }
    private async generateToken (data: ItokenPayLoad, options?: SignOptions): Promise<string>{
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

