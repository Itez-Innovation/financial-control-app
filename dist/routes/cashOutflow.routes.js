"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateCashOutflowController_1 = require("../controller/CreateCashOutflowController");
const cashOutflowRoute = (0, express_1.Router)();
cashOutflowRoute.post("/cashOutflow", new CreateCashOutflowController_1.CreateCashOutflowController().handle);
// cashOutflowRoute.post('/', async (request, response) => {
//     try {
//         const repo = getRepository(CashOutflow)
//         const res = await repo.save(request.body)
//         return response.status(201).json(res)
//     } catch (err) {
//         console.log('err.message :>> ', err)
//         return response.status(400).send()
//     }
// })
// cashOutflowRoute.get('/',async (request, response) => {
//     response.json(await getRepository(CashOutflow).find())    
// })
// cashOutflowRoute.get('/:Titulo',async (request, response) => {
//     const repository = getCustomRepository(CashOutflowRepository)
//     const res = await repository.findByTitulo(request.params.Titulo)
//     response.json(res)    
// })
// cashOutflowRoute.get('/:Area',async (request, response) => {
//     const repository = getCustomRepository(CashOutflowRepository)
//     const res = await repository.findByArea(request.params.Area)
//     response.json(res)    
// })
// cashOutflowRoute.get('/:id',async (request, response) => {
//     const repository = getCustomRepository(CashOutflowRepository)
//     const posta = await repository.findById(Number(request.params.id))
//     response.json(posta)    
// })
// cashOutflowRoute.get('/:Valor',async (request, response) => {
//     const repository = getCustomRepository(CashOutflowRepository)
//     const posta = await repository.findByValor(Number(request.params.Valor))
//     response.json(posta)    
// })
exports.default = cashOutflowRoute;
//# sourceMappingURL=cashOutflow.routes.js.map