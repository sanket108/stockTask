"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const stock_1 = tslib_1.__importDefault(require("../utils/stock"));
const transactions_1 = tslib_1.__importDefault(require("../utils/transactions"));
class StockService {
    constructor() {
        this.calculateCurrentStock = async (searchSku) => {
            let refundProduct = [], orderProduct = [];
            let refundQtyCount = 0, orderQtyCount = 0;
            const skuStockDetail = stock_1.default.find(eachStock => eachStock.sku === searchSku);
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
            if (!skuStockDetail && refundProduct.length === 0 && orderProduct.length === 0) {
                return { message: 'No Data Found!' };
            }
            return {
                "sku": searchSku,
                "qty": skuStockDetail.stock + refundQtyCount - orderQtyCount
            };
        };
    }
}
exports.default = StockService;
//# sourceMappingURL=stockService.js.map