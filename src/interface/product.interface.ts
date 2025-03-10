import { IBase } from "./base.interface";

export interface IProduct extends IBase {
    name: string,
    price: number,
    discount: number,
}