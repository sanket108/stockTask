import { Request, Response } from 'express';
import StockService from '@/services/stockService';

class Controller {

  public getStockDetailBySku = async (req: Request, res: Response) => {
    try {
      const searchSku = req.body.sku;
      let stockService = new StockService();
      let result = await stockService.calculateCurrentStock(searchSku);
      if(result.hasOwnProperty('message')) {
        res.status(404).send({message: 'No Data Found!'});
      }
      res.status(200).json(result);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}

export default Controller;
