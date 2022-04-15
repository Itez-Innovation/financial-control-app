import { response, Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import CashOutflow from '../entity/CashOutflowEntity';
import CashOutflowRepository from '../repositories/CashOutflowRepository';


const cashOutflowRoute = Router()

cashOutflowRoute.post('/', async (request, response) => {
    try {
        const repo = getRepository(CashOutflow)
        const res = await repo.save(request.body)
        return response.status(201).json(res)
    } catch (err) {
        console.log('err.message :>> ', err)
        return response.status(400).send()
    }
})

cashOutflowRoute.get('/',async (request, response) => {
    response.json(await getRepository(CashOutflow).find())    
})

cashOutflowRoute.get('/:Titulo',async (request, response) => {
    const repository = getCustomRepository(CashOutflowRepository)
    const res = await repository.findByTitulo(request.params.Titulo)
    response.json(res)    
})

cashOutflowRoute.get('/:Area',async (request, response) => {
    const repository = getCustomRepository(CashOutflowRepository)
    const res = await repository.findByArea(request.params.Area)
    response.json(res)    
})

cashOutflowRoute.get('/:id',async (request, response) => {
    const repository = getCustomRepository(CashOutflowRepository)
    const posta = await repository.findById(Number(request.params.id))
    response.json(posta)    
})

cashOutflowRoute.get('/:Valor',async (request, response) => {
    const repository = getCustomRepository(CashOutflowRepository)
    const posta = await repository.findByValor(Number(request.params.Valor))
    response.json(posta)    
})

