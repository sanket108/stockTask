import { Request, Response } from 'express';
import stock from '@/utils/stock';
import transactions from '@/utils/transactions';

class Controller {

  public getStockDetailBySku = async (req: Request, res: Response) => {
    try {
      const searchSku = req.body.sku;
      let refundProduct = [], orderProduct = [];
      let refundQtyCount = 0, orderQtyCount = 0;
      const skuStockDetail = stock.find(eachStock => eachStock.sku === searchSku);
      if(!skuStockDetail && refundProduct.length === 0 && orderProduct.length === 0) {
        res.status(404).send({message: 'No Data Found!'});
      }
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
      let response = {
        "sku": searchSku,
        "stock": skuStockDetail.stock + refundQtyCount - orderQtyCount
      };
      res.status(200).json(response);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}

export default Controller;
