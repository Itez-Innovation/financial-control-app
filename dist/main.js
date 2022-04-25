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
// database on docker
// docker run --name finance -e POSTGRES_PASSWORD=finance -e POSTGRES_USER=finance -p 5433:5432 -d postgres
//# sourceMappingURL=main.js.map