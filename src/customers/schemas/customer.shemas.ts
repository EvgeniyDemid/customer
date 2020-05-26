import * as mongoose from 'mongoose';
import { genderEnum } from '../enum/gender.enum';
import { roleEnum } from '../enum/role.enum';

export const CustomerSchema = new mongoose.Schema({
  email: {type:String, required:true},
  avatar:{type:String, default:null},
  avatarId:{type:String, default:null},
  name: {type:String, required:true},
  suname:{type:String, required:true},
  age: {type:Number, default: 18},
  address: {
    country:{type:String, default:null},
    sity:{type:String, default:null},
    street:{type:String, default:null}
  },
  phone:{type:String, default:null},
  gender: {type:String, required:true, enum: Object.values(genderEnum)},
  password:{type:String, required:true},
  role:{type:[String], required:true, enum: Object.values(roleEnum)}
});
CustomerSchema.index({email: 1}, {unique : true})