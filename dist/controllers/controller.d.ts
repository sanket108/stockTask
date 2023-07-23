import { Request, Response } from 'express';
declare class Controller {
    getStockDetailBySku: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
export default Controller;
