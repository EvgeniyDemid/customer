import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateCustomersDto } from './dto/customer.dto';
import { ICustomer } from './interface/customer.interface';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
   constructor(private readonly customersService: CustomersService ){}

    @Get()
    findAll():Promise<ICustomer[]>{
        return this.customersService.findAll()
    }
    @Get(':id')
    findOne(@Param('id') id:string): Promise<ICustomer>{
        console.log(id)
        return this.customersService.findOne(id)
    }
    @Post()
    createCustomer(@Body() createCustomersDto: CreateCustomersDto ): Promise<ICustomer>{
        return this.customersService.create(createCustomersDto)
    }
    @Put(':id')
    update(@Body() createCustomersDto: CreateCustomersDto, @Param('id') id: string){
        return this.customersService.updateOne(id, createCustomersDto)
    }
    @Delete(':id')
    delete(@Param('id') id: string){
        this.customersService.delete(id);
        return id
    }
}
