import { Request, Response } from "express";
import { UpdateAccountService } from "../service/UpdateAccountService";



export class UpdateAccountController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { CPF, Name } = request.body;

        const service = new UpdateAccountService();

        const result = await service.execute({id, CPF, Name});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }



        return response.json(result);
    }
}