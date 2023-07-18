"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const controller_1 = tslib_1.__importDefault(require("../controllers/controller"));
const router = (0, express_1.Router)();
const controller = new controller_1.default();
router.post('/stock', controller.getStockDetailBySku);
exports.default = router;
//# sourceMappingURL=routes.js.map