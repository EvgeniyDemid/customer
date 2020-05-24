import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomersDto {
    @ApiProperty({
        description: 'The email of a customer',
        type: String
    })
    email: string;

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
    address: string;
    
    @ApiProperty({
        description: 'The gender of a customer',
        type: String
    })
    gender: string;
    
    @ApiProperty({
        description: 'The rule of a customer',
        type: Boolean
    })
    isAdmin: boolean;
    
    @ApiProperty({
        description: 'The password of a customer',
        type: String
    })
    password:string;
    
}