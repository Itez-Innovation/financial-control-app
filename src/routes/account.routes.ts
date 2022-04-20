import { Router } from 'express';
import { CreateAccountController } from '../controller/CreateAccountController';
import { GetAllAccountsController } from '../controller/GetAllAccountsController';
import { DeleteAccountController } from '../controller/DeleteAccountController';
import { UpdateAccountController } from '../controller/UpdateAccountController';
import { GetAllFinancialStatsController } from '../controller/GetAllFinancialStatsController';

const accountRoute = Router();

accountRoute.post("/accounts", new CreateAccountController().handle);

accountRoute.get("/accounts", new GetAllAccountsController().handle);

accountRoute.delete("/accounts/:id", new DeleteAccountController().handle);

accountRoute.put("/accounts/:id", new UpdateAccountController().handle);

accountRoute.get("/stats", new GetAllFinancialStatsController().handle);

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