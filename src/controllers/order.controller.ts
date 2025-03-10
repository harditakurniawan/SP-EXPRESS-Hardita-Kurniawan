import { Request, Response } from 'express';
import { response } from '../utils/response-status.util';
import orderService from '../services/order.service';
import { ResponseConfig } from '../config/config';

class OrderController {
    async calculateDiscount(req: Request, res: Response) {
        try {
            const calculatedDiscount = await orderService.calculateDiscount(req.body);

            return response.Success(res, ResponseConfig.order.success.message, calculatedDiscount);
        } catch (error: any) {
            return response.Error(res, error.message);
        }
    }
}

export default new OrderController();