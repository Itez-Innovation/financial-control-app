"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const CashOutflow_1 = require("../entity/CashOutflow");
const CashOutflowRepository_1 = require("../repositories/CashOutflowRepository");
const cashOutflowRoute = (0, express_1.Router)();
cashOutflowRoute.post('/', async (request, response) => {
    try {
        const repo = (0, typeorm_1.getRepository)(CashOutflow_1.default);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
    }
    catch (err) {
        console.log('err.message :>> ', err);
        return response.status(400).send();
    }
});
cashOutflowRoute.get('/', async (request, response) => {
    response.json(await (0, typeorm_1.getRepository)(CashOutflow_1.default).find());
});
cashOutflowRoute.get('/:Titulo', async (request, response) => {
    const repository = (0, typeorm_1.getCustomRepository)(CashOutflowRepository_1.default);
    const res = await repository.findByTitulo(request.params.Titulo);
    response.json(res);
});
cashOutflowRoute.get('/:Area', async (request, response) => {
    const repository = (0, typeorm_1.getCustomRepository)(CashOutflowRepository_1.default);
    const res = await repository.findByArea(request.params.Area);
    response.json(res);
});
cashOutflowRoute.get('/:id', async (request, response) => {
    const repository = (0, typeorm_1.getCustomRepository)(CashOutflowRepository_1.default);
    const posta = await repository.findById(Number(request.params.id));
    response.json(posta);
});
cashOutflowRoute.get('/:Valor', async (request, response) => {
    const repository = (0, typeorm_1.getCustomRepository)(CashOutflowRepository_1.default);
    const posta = await repository.findByValor(Number(request.params.Valor));
    response.json(posta);
});
//# sourceMappingURL=cashOutflow.routes.js.map