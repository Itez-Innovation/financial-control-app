"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)().then(async (connection) => {
    const app = await Promise.resolve().then(() => require("./app"));
    app.default.listen(process.env.API_PORT || 8081);
    console.log("server on in port:" + (process.env.API_PORT || 8081));
}).catch(error => console.log(error));
//# sourceMappingURL=server.js.map