import { Request, Response } from 'express';
import Controller from '../controllers/controller';


describe('Controller', () => {
    let controller: Controller;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        controller = new Controller();
        req = {
            body: {
                "sku": "NAX148363/42/24"
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
            json: jest.fn()
        };
    });

    it('should return stock detail when SKU is found', async () => {
        const expectedResponse = {
            sku: "NAX148363/42/24",
            stock: 7707
        };
        await controller.getStockDetailBySku(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    it('should return 404 when SKU is not found and no transactions', async () => {
      req.body.sku = 'example-sku';
      await controller.getStockDetailBySku(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({ message: 'No Data Found!' });
    });
});
