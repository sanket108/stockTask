import { Request, Response } from 'express';
import stock from '@/utils/stock';
import transactions from '@/utils/transactions';
type Product = {
    sku: string;
    qty: number;
};

type Message = {
    message: string
}
  
type ProductFetcher = (sku: string) => Promise<Product | Message>;
class StockService {

    public calculateCurrentStock: ProductFetcher = async (searchSku: string): Promise<Product | Message> => {
        let refundProduct = [], orderProduct = [];
        let refundQtyCount = 0, orderQtyCount = 0;
        const skuStockDetail = stock.find(eachStock => eachStock.sku === searchSku);
        transactions.forEach(eachTransaction => {
            if (eachTransaction.sku === searchSku && eachTransaction.type === "order") {
                orderQtyCount += eachTransaction.qty;
                orderProduct.push(eachTransaction);
            }
            if (eachTransaction.sku === searchSku && eachTransaction.type === "refund") {
                refundQtyCount += eachTransaction.qty;
                refundProduct.push(eachTransaction);
            }
        });
        if (!skuStockDetail && refundProduct.length === 0 && orderProduct.length === 0) {
            return { message: 'No Data Found!' };
        }
        return {
            "sku": searchSku,
            "qty": skuStockDetail.stock + refundQtyCount - orderQtyCount
        };
    };
}

export default StockService;
