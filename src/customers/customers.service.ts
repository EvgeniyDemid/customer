import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICustomer } from './interface/customer.interface';
import { CreateCustomersDto } from './dto/customer.dto';

@Injectable()
export class CustomersService {
    constructor(@InjectModel("Customer") private readonly customerModel: Model<ICustomer>){}
    async create( createCustomerDto: CreateCustomersDto): Promise<ICustomer>{
        const createdUser = new this.customerModel(createCustomerDto)
        return createdUser.save()
    }
    async findAll():Promise<ICustomer[]>{
        return this.customerModel.find()
    }
}
