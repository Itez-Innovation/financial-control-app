import { NextFunction, Request, Response } from "express";
import { CashOutflowService } from "../service/cashOutflowService";

const service = new CashOutflowService()
class CashOutflowController {

    async create(request: Request, res: Response, next: NextFunction){
        try{
            const { Area, Titulo, Valor, account_id } = request.body

            const response = await service.create({ Area, Titulo, Valor, account_id })

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
            const { Area, Titulo, Valor, id } = request.body

            const response = await service.update({Area, Titulo, Valor}, id)

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

            const response = await service.readAll()

            return res.status(201).json(response)

        }catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

}

export default new CashOutflowController()


