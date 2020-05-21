import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICustomer } from './interface/customer.interface';
import { CreateCustomersDto } from './dto/customer.dto';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

@Injectable()
export class CustomersService {
    constructor(@InjectModel("Customer") private readonly customerModel: Model<ICustomer>){}

    async findOne(id: string):Promise<ICustomer>{
        return await this.customerModel.findById(id).exec()
    }
    async create( createCustomerDto: CreateCustomersDto): Promise<ICustomer>{
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(createCustomerDto.password, salt);
        const createdUser = new this.customerModel(_.assignIn(createCustomerDto, {password: hash}))
        return await createdUser.save()
    }
    async findAll():Promise<any>{
        return this.customerModel.find()
    }
    async updateOne(id: string, createCustomerDto: CreateCustomersDto ):Promise<ICustomer>{
        return await this.customerModel.findByIdAndUpdate(id, createCustomerDto, {new: true})
    }
    async delete( id: string): Promise<ICustomer>{
        return await this.customerModel.findByIdAndDelete(id)
    }
    
}
