"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const Account_1 = require("../entity/Account");
const AccountRepository_1 = require("../repositories/AccountRepository");
const accountRoute = (0, express_1.Router)();
accountRoute.post('/', async (request, response) => {
    try {
        const repo = (0, typeorm_1.getRepository)(Account_1.default);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
    }
    catch (err) {
        console.log('err.message :>> ', err);
        return response.status(400).send();
    }
});
accountRoute.get('/', async (request, response) => {
    response.json(await (0, typeorm_1.getRepository)(Account_1.default).find());
});
accountRoute.get('/:name', async (request, response) => {
    const repository = (0, typeorm_1.getCustomRepository)(AccountRepository_1.default);
    const res = await repository.findByName(request.params.name);
    response.json(res);
});
exports.default = accountRoute;
//# sourceMappingURL=account.routes.js.map