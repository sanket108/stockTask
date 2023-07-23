import { Request, Response } from 'express';
import StockService from '@/services/stockService';

class Controller {

  public getStockDetailBySku = async (req: Request, res: Response) => {
    try {
      if(!req.body.sku) {
        return res.status(400).send({message: 'Invalid request body!'});
      }
      const searchSku = req.body.sku;
      let stockService = new StockService();
      let result = await stockService.calculateCurrentStock(searchSku);
      if(result.hasOwnProperty('message')) {
        return res.status(404).send({message: 'No Data Found!'});
      }
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };
}

export default Controller;
