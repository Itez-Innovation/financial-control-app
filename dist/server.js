"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const app_1 = require("./app");
require("reflect-metadata");
require("./migration");
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)().then(async (connection) => {
    app_1.default.listen(process.env.PORT || 3000, () => {
        console.log('🏃 Running Server');
    });
}).catch(error => console.log(error));
dotenv.config();
//# sourceMappingURL=server.js.map