"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const app_1 = require("./app");
(0, typeorm_1.createConnection)({
    "type": "postgres",
    "host": "localhost",
    "port": 5433,
    "username": "finance",
    "password": "finance",
    "database": "finance",
    "synchronize": true,
    "logging": false,
    entities: [__dirname + '/entity/*{.ts,.js}']
}).then(async (conn) => {
    await (0, app_1.default)();
});
//# sourceMappingURL=main.js.map