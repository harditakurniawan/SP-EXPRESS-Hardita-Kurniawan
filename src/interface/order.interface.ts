import { EOrderStatus } from "../enum/order-status.enun";
import { IBase } from "./base.interface";

export interface IOrder extends IBase {
    customer_id: number,
    order_date: Date,
    total_price: number,
    status: EOrderStatus,
}