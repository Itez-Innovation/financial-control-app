import { NextFunction, Request, Response } from "express"
import { CashInflowService } from "../service/cashInflowService"

const service = new CashInflowService()

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

}

export default new CashInflowController()