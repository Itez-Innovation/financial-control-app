import { Request, Response } from "express";
import { CreateCashOutflowService } from "../service/CreateCashOutflowService";



export class CreateCashOutflowController {
    async handle(request:Request, response:Response) {
        const {Area, Titulo, Valor, account_id} = request.body

        const service = new CreateCashOutflowService();

        const result = await service.execute({
            Area,
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