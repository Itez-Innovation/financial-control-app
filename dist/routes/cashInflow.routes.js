"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateCashInflowController_1 = require("../controller/CreateCashInflowController");
const cashInflowRoute = (0, express_1.Router)();
cashInflowRoute.post("/cashInflow", new CreateCashInflowController_1.CreateCashInflowController().handle);
// cashInflowRoute.post('/', async (request, response) => {
//     try {
//         const repo = getRepository(CashInflow)
//         const res = await repo.save(request.body)
//         return response.status(201).json(res)
//     } catch (err) {
//         console.log('err.message :>> ', err)
//         return response.status(400).send()
//     }
// })
// cashInflowRoute.get('/',async (request, response) => {
//     response.json(await getRepository(CashInflow).find())    
// })
// cashInflowRoute.get('/:Titulo',async (request, response) => {
//     const repository = getCustomRepository(CashInflowRepository)
//     const res = await repository.findByTitulo(request.params.Titulo)
//     response.json(res)    
// })
// cashInflowRoute.get('/:id',async (request, response) => {
//     const repository = getCustomRepository(CashInflowRepository)
//     const posta = await repository.findById(Number(request.params.id))
//     response.json(posta)    
// })
exports.default = cashInflowRoute;
//# sourceMappingURL=cashInflow.routes.js.map