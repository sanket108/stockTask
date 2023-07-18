"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const stock_1 = tslib_1.__importDefault(require("../utils/stock"));
const transactions_1 = tslib_1.__importDefault(require("../utils/transactions"));
class Controller {
    constructor() {
        this.getStockDetailBySku = async (req, res) => {
            try {
                const searchSku = req.body.sku;
                let refundProduct = [], orderProduct = [];
                let refundQtyCount = 0, orderQtyCount = 0;
                const skuStockDetail = stock_1.default.find(eachStock => eachStock.sku === searchSku);
                if (!skuStockDetail && refundProduct.length === 0 && orderProduct.length === 0) {
                    res.status(404).send({ message: 'No Data Found!' });
                }
                transactions_1.default.forEach(eachTransaction => {
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
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
    }
}
exports.default = Controller;
//# sourceMappingURL=controller.js.map