import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IAddress } from "../interface/address.interface";
import { IsEmail, IsString, IsNotEmpty, IsNumber, IsPassportNumber, Matches, IsOptional, IsEnum } from "class-validator";
import { genderEnum } from "../enum/gender.enum";

export class CreateCustomersDto {
    @ApiProperty({
        description: 'The email of a customer',
        type: String
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'The avatar of a customer',
        type: String
    })
    avatar: string;
    
    
    @ApiProperty({
        description: 'The avatarID of a customer',
        type: String
    })
    avatarId: string;
    
    

    @ApiProperty({
        description: 'The Name of a customer',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty({
        description: 'The Suname of a customer',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    suname: string;
    
    @ApiProperty({
        description: 'The age of a customer',
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    age: number;
    
    @ApiPropertyOptional({
        description: 'The address of a customer',
        type: String
    })
    @IsOptional()

    address: IAddress;

    @ApiProperty({
        description: 'The address of a customer',
        type: String
    })
    @IsNotEmpty()
    @IsString()
    phone: string;
    
    
    @ApiProperty({
        description: 'The gender of a customer',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    @IsEnum(genderEnum)
    gender: string;
    
    @ApiProperty({
        description: 'The password of a customer',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    @Matches( /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{16,})/,
    { message: 'Weak password' },)
    password:string;
    @ApiProperty({
        description: 'The password of a customer',
        type: String
    })

    role:Array<string>;
}