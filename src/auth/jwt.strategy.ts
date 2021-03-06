import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { TokenService } from "./token/token.service";
import { ICustomer } from "src/customers/interface/customer.interface";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService, 
    private readonly tokenService: TokenService,
    ) {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: configService.get<string>('JWT_SICRET'),
        passReqToCallback: true,
    });
    
  }

  async validate(req, customer: Partial<ICustomer>) {
    const token = req.headers.authorization.slice(7);
    const tokenExists = await this.tokenService.exists(customer._id, token);
    if (tokenExists) {
      return customer;
    } else {
      throw new UnauthorizedException();
    }
  }
}