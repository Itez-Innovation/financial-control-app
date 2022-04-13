"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
const app = express();
app.use(express.json());
app.use(routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map