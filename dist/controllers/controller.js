"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const stockService_1 = tslib_1.__importDefault(require("../services/stockService"));
class Controller {
    constructor() {
        this.getStockDetailBySku = async (req, res) => {
            try {
                if (!req.body.sku) {
                    return res.status(400).send({ message: 'Invalid request body!' });
                }
                const searchSku = req.body.sku;
                let stockService = new stockService_1.default();
                let result = await stockService.calculateCurrentStock(searchSku);
                if (result.hasOwnProperty('message')) {
                    return res.status(404).send({ message: 'No Data Found!' });
                }
                return res.status(200).json(result);
            }
            catch (e) {
                return res.status(500).send(e.message);
            }
        };
    }
}
exports.default = Controller;
//# sourceMappingURL=controller.js.map