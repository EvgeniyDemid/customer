import * as mongoose from 'mongoose';
import { Schema } from '@nestjs/mongoose';
import { CustomerSchema } from 'src/customers/schemas/customer.shemas';

export const TokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  uId: { type: String, required: true, ref: 'Customer' },
  expireAt: { type: Date, required: true },
});

TokenSchema.index({ token: 1, uId: 1 }, { unique: true });