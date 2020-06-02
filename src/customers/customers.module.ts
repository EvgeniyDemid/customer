import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/customer.shemas';

@Module({
  imports:[MongooseModule.forFeature([{name: "Customer", schema: CustomerSchema}])],
  providers: [CustomersService],
  controllers: [CustomersController],
  exports:[CustomersService]
})
export class CustomersModule {}

