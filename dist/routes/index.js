"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_routes_1 = require("./account.routes");
const cashInflow_routes_1 = require("./cashInflow.routes");
const routes = (0, express_1.Router)();
routes.use('/Account', account_routes_1.default);
routes.use('/CashInflow', cashInflow_routes_1.default);
routes.use('/CashOutflow', cashInflow_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map