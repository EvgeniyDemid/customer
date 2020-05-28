import { Controller, Post, Body, Get, Param, Put, Delete, ValidationPipe } from '@nestjs/common';
import { CreateCustomersDto } from './dto/create-customer.dto';
import { ICustomer } from './interface/customer.interface';
import { CustomersService } from './customers.service';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';
import { CustomerSchema } from './schemas/customer.shemas';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
   constructor(private readonly customersService: CustomersService ){}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Return all customer',
        type:[CreateCustomersDto]
    })
    findAll():Promise<ICustomer[]>{
        return this.customersService.findAll()
    }
    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Return  customer by id',
        type:CreateCustomersDto
    })
    findOne(@Param('id') id:string): Promise<ICustomer>{
        console.log(id)
        return this.customersService.findOne(id)
    }
    @Post()
    @ApiBody({type:CreateCustomersDto})
    createCustomer(@Body(ValidationPipe) createCustomersDto: CreateCustomersDto, role ): Promise<ICustomer>{
        return this.customersService.create(createCustomersDto,role )
    }
    @Put(':id')
    @ApiBody({type:CreateCustomersDto})
    update(@Body() createCustomersDto: CreateCustomersDto, @Param('id') id: string){
        return this.customersService.updateOne(id, createCustomersDto)
    }
    @Delete(':id')
    delete(@Param('id') id: string){
        this.customersService.delete(id);
        return id
    }
}
