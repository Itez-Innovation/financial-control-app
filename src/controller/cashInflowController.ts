import { NextFunction, Request, Response } from "express"
import CashInflowRepository from "../repositories/cashInflowRepository/CashInflowRepository"
import { CashInflowService } from "../service/cashInflowService"

const service = new CashInflowService(new CashInflowRepository())

class CashInflowController {

    async create(request: Request, res: Response, next: NextFunction){
        try{
            const { Titulo, Valor, account_id } = request.body

            const response = await service.create({ Titulo, Valor, account_id })

            return res.status(201).json(response)

        } catch (error) {
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async delete(request: Request, res: Response, next: NextFunction){
        try{
            const { id } = request.body

            await service.delete(id)

            return res.status(204).json()

        }catch (error) {
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async update(request: Request, res: Response, next: NextFunction){
        try{
            const { Titulo, Valor, id } = request.body

            const response = await service.update({Titulo, Valor}, id)

            return res.status(201).json(response)

        } catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async read(request: Request, res: Response, next: NextFunction){
        try{
            const { id }= request.body

            const response = await service.read(id)

            return res.status(201).json(response)

        }catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async readAll(request: Request, res: Response, next: NextFunction){
        try{
            return res.status(201).json(await service.readAll())
        }catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

}

export default new CashInflowController()