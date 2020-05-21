import {Document} from 'mongoose'
export interface ICustomer extends Document{
 readonly email: string;
 readonly name: string;
 readonly suname: string;
 readonly age: number;
 readonly address: string;
 readonly  gender: string;
 readonly isAdmin: boolean;
 readonly password:string;
}