"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("reflect-metadata");
require("./database");
const account_routes_1 = require("./routes/account.routes");
const cashInflow_routes_1 = require("./routes/cashInflow.routes");
const cashOutflow_routes_1 = require("./routes/cashOutflow.routes");
const app = express();
app.use(express.json());
app.use(account_routes_1.default);
app.use(cashInflow_routes_1.default);
app.use(cashOutflow_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map