"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = require("../controller/accountController");
const accountController_2 = require("../controller/accountController");
const accountRoute = (0, express_1.Router)();
accountRoute.post("/accounts", accountController_1.default.create);
accountRoute.get("/accounts", accountController_2.default.read);
accountRoute.delete("/accounts/:id", accountController_2.default.delete);
accountRoute.put("/accounts", accountController_2.default.update);
accountRoute.get("/accounts/all", accountController_2.default.readAll);
// const accountRoute = Router()
// accountRoute.post('/accounts', async (request, response) => {
//     try {
//         const repo = getRepository(AccountRepository)
//         const res = await repo.save(request.body)
//         return response.status(201).json(res)
//     } catch (err) {
//         console.log('err.message :>> ', err)
//         return response.status(400).send()
//     }
// })
// accountRoute.get('/',async (request, response) => {
//     response.json(await getRepository(AccountRepository).find())    
// })
// accountRoute.get('/:name',async (request, response) => {
//     const repository = getCustomRepository(AccountRepository)
//     const res = await repository.findByName(request.params.name)
//     response.json(res)    
// })
exports.default = accountRoute;
//# sourceMappingURL=account.routes.js.map