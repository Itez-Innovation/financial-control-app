import { Router } from 'express';
import { GetAllAccountsController } from '../controller/GetAllAccountsController';
import { UpdateAccountController } from '../controller/UpdateAccountController';
import { GetAllFinancialStatsController } from '../controller/GetAllFinancialStatsController';
import AccountController from "../controller/accountController";
import accountController from "../controller/accountController";

const accountRoute = Router();

accountRoute.post("/accounts", AccountController.create);

accountRoute.get("/accounts", accountController.read);

accountRoute.delete("/accounts/:id", accountController.delete);

accountRoute.put("/accounts", accountController.update);

accountRoute.get("/accounts/all", accountController.readAll);

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

export default accountRoute