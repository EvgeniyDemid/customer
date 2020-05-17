import * as mongoose from 'mongoose';
import { genderEnum } from '../enum/custumer.enum';

export const CustomerSchema = new mongoose.Schema({
  email: {type:String, required:true},
  name: {type:String, required:true},
  suname:{type:String, required:true},
  age: {type:Number, required:true, default:18},
  address: {type: String, required: true},
  gender: {type:String, required:true, enum: Object.values(genderEnum)},
  isAdmin: {type:Boolean, required:true},
  password:{type:String, required:true},
  id: {type:String, default: null}
});
CustomerSchema.index({email: 1}, {unique : true})