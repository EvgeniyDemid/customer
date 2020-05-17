import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCustomersDto } from './dto/customer.dto';
import { ICustomer } from './interface/customer.interface';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
   constructor(private readonly customersService: CustomersService ){}
    @Post()
    createCustomer(@Body() createCustomersDto: CreateCustomersDto ): Promise<ICustomer>{
        return this.customersService.create(createCustomersDto)
    }
    @Get()
    findAll():Promise<ICustomer[]>{
        return this.customersService.findAll()
    }
}
