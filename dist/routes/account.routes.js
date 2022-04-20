"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateAccountController_1 = require("../controller/CreateAccountController");
const GetAllAccountsController_1 = require("../controller/GetAllAccountsController");
const DeleteAccountController_1 = require("../controller/DeleteAccountController");
const UpdateAccountController_1 = require("../controller/UpdateAccountController");
const GetAllFinancialStatsController_1 = require("../controller/GetAllFinancialStatsController");
const accountRoute = (0, express_1.Router)();
accountRoute.post("/accounts", new CreateAccountController_1.CreateAccountController().handle);
accountRoute.get("/accounts", new GetAllAccountsController_1.GetAllAccountsController().handle);
accountRoute.delete("/accounts/:id", new DeleteAccountController_1.DeleteAccountController().handle);
accountRoute.put("/accounts/:id", new UpdateAccountController_1.UpdateAccountController().handle);
accountRoute.get("/stats", new GetAllFinancialStatsController_1.GetAllFinancialStatsController().handle);
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