import { Request, Response } from "express";
import { CreateCashInflowService } from "../service/CreateCashInflowService";



export class CreateCashInflowController {
    async handle(request: Request, response: Response) {
        const { Titulo, Valor, account_id } = request.body

        const service = new CreateCashInflowService();

        const result = await service.execute({
            Titulo,
            Valor,
            account_id
        })

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}