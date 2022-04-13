import { response, Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import CashInflow from '../entity/CashInflow';
import CashInflowRepository from '../repositories/CashInflowRepository';

const cashInflowRouter = Router()

cashInflowRouter.post('/', async (request, response) => {
    try {
        const repo = getRepository(CashInflow)
        const res = await repo.save(request.body)
        return response.status(201).json(res)
    } catch (err) {
        console.log('err.message :>> ', err)
        return response.status(400).send()
    }
})

cashInflowRouter.get('/',async (request, response) => {
    response.json(await getRepository(CashInflow).find())    
})

cashInflowRouter.get('/:Titulo',async (request, response) => {
    const repository = getCustomRepository(CashInflowRepository)
    const res = await repository.findByTitulo(request.params.Titulo)
    response.json(res)    
})

cashInflowRouter.get('/:id',async (request, response) => {
    const repository = getCustomRepository(CashInflowRepository)
    const posta = await repository.findById(Number(request.params.id))
    response.json(posta)    
})

export default cashInflowRouter