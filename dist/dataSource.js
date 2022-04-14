"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    cache: true,
    synchronize: true,
    entities: ["dist/entity/*.js"],
    migrations: ["dist/migration/*.js"],
    subscribers: [],
});
//# sourceMappingURL=dataSource.js.map