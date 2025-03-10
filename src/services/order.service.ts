import database from '../config/database';

interface RequestCreateOrder {
    customer_id: number,
    product_id: number,
    quantity: number,
}

class OrderService {
    constructor(){}

    public async calculateDiscount(body: RequestCreateOrder): Promise<object> {
        try {
            const { product_id, quantity } = body;

            const [result]          = await database.sql.query('SELECT * FROM products WHERE id = ?', [product_id]) as any;
            const product           = result[0];
            const price             = product.price;
            const discount          = product.discount || 0;
            const convertedDiscount = discount / 100;
            const discountedPrice   = price - (price * convertedDiscount);
            const finalPrice        = discountedPrice * quantity;

            return { 
                discount, 
                final_price: finalPrice 
            };
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default new OrderService();