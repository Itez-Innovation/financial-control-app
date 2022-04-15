"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const CashInflowEntity_1 = require("../entity/CashInflowEntity");
const CashInflowRepository_1 = require("../repositories/CashInflowRepository");
const cashInflowRoute = (0, express_1.Router)();
cashInflowRoute.post('/', async (request, response) => {
    try {
        const repo = (0, typeorm_1.getRepository)(CashInflowEntity_1.default);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
    }
    catch (err) {
        console.log('err.message :>> ', err);
        return response.status(400).send();
    }
});
cashInflowRoute.get('/', async (request, response) => {
    response.json(await (0, typeorm_1.getRepository)(CashInflowEntity_1.default).find());
});
cashInflowRoute.get('/:Titulo', async (request, response) => {
    const repository = (0, typeorm_1.getCustomRepository)(CashInflowRepository_1.default);
    const res = await repository.findByTitulo(request.params.Titulo);
    response.json(res);
});
cashInflowRoute.get('/:id', async (request, response) => {
    const repository = (0, typeorm_1.getCustomRepository)(CashInflowRepository_1.default);
    const posta = await repository.findById(Number(request.params.id));
    response.json(posta);
});
exports.default = cashInflowRoute;
//# sourceMappingURL=cashInflow.routes.js.map