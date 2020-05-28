import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SingInDto } from './token/dto/singnin.dto';
import { IReadableUser } from './token/interface/IReadableUser';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor ( private readonly authService: AuthService){}
    @Post()
    async signIn(@Body(new ValidationPipe()) singInDto: SingInDto):Promise<IReadableUser>{
        return await this.authService.signIn(singInDto)
    }
}
