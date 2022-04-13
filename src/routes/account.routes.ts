import { response, Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Account from '../entity/Account';
import AccountRepository from '../repositories/AccountRepository';


const accountRouter = Router()

accountRouter.post('/', async (request, response) => {
    try {
        const repo = getRepository(Account)
        const res = await repo.save(request.body)
        return response.status(201).json(res)
    } catch (err) {
        console.log('err.message :>> ', err)
        return response.status(400).send()
    }
})

accountRouter.get('/',async (request, response) => {
    response.json(await getRepository(Account).find())    
})

accountRouter.get('/:name',async (request, response) => {
    const repository = getCustomRepository(AccountRepository)
    const res = await repository.findByName(request.params.name)
    response.json(res)    
})

export default accountRouter