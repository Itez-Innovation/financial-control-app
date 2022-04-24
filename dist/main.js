"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importações
// import AccountEntity from "./entity/AccountEntity";
// import AccountRepository from "./repositories/AccountRepository";
// import Account from "./model/Account"
// import { CreateAccountController } from "./controller/CreateAccountController";
// import {Router} from "express"
const typeorm_1 = require("typeorm");
// import { Console } from "console";
const app_1 = require("./app");
/*-----------------------------------------------------------------------------------------*/
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