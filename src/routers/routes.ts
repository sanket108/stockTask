import { Router } from 'express';
import Controller from '@controllers/controller';

const router = Router();
const controller = new Controller();

router.post('/stock', controller.getStockDetailBySku);

export default router;