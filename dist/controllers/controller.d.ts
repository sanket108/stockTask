import { Request, Response } from 'express';
declare class Controller {
    getStockDetailBySku: (req: Request, res: Response) => Promise<void>;
}
export default Controller;
