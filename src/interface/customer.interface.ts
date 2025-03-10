import { IBase } from "./base.interface";

export interface ICustomer extends IBase {
    name: string,
    email: string,
    phone: string,
}