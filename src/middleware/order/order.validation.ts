import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { response } from '../../utils/response-status.util';

/**
 * sudah pasti ada semua payloadnya karena sudah di validasi saat create order oleh laravel.
 * jadi asumsinya data yg d kirim oleh laravel adalah data yg sudah tervalidasi.
 */
const validateOrder = [
    body('customer_id')
        .notEmpty().withMessage('Customer ID required')
        .isInt({ min: 1 }).withMessage('Customer ID should be integer and min 1'),

    body('product_id')
        .notEmpty().withMessage('Product ID required')
        .isInt({ min: 1 }).withMessage('Product ID should be integer and min 1'),

    body('quantity')
        .notEmpty().withMessage('Quantity required')
        .isInt({ min: 1 }).withMessage('Quantity should be integer and min 1'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return response.Error(res, errors.array(), 400);
        }

        next();
    },
];

export default validateOrder;