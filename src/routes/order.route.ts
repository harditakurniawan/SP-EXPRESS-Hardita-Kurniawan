import express from 'express';
import OrderController from '../controllers/order.controller';
import validateOrder from '../middleware/order/order.validation';

const router = express.Router();

router.post('/calculate-discounts', validateOrder, OrderController.calculateDiscount);

export default router;