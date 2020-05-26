import { ApiProperty } from "@nestjs/swagger";
import { IAddress } from "../interface/address.interface";

export class CreateCustomersDto {
    @ApiProperty({
        description: 'The email of a customer',
        type: String
    })
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
    name: string;
    
    @ApiProperty({
        description: 'The Suname of a customer',
        type: String
    })
    suname: string;
    
    @ApiProperty({
        description: 'The age of a customer',
        type: Number
    })
    age: number;
    
    @ApiProperty({
        description: 'The address of a customer',
        type: String
    })
    address: IAddress;

    @ApiProperty({
        description: 'The address of a customer',
        type: String
    })
    phone: string;
    
    
    @ApiProperty({
        description: 'The gender of a customer',
        type: String
    })
    gender: string;
    
    @ApiProperty({
        description: 'The password of a customer',
        type: String
    })
    password:string;
    
    @ApiProperty({
        description: 'The password of a customer',
        type: String
    })
    role:Array<string>;
}