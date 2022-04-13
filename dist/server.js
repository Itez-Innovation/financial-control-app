"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const app_1 = require("./app");
require("reflect-metadata");
require("./database");
dotenv.config();
app_1.default.listen(process.env.PORT || 3000, () => {
    console.log('🏃 Running Server');
});
//# sourceMappingURL=server.js.map