import { Request, Response } from "express";
import { CreateAccountService } from "../service/CreateAccountService";


export class CreateAccountController {
    static create(arg0: string, create: any) {
        throw new Error("Method not implemented.");
    }
    async handle(request: Request, response: Response) {
        const { CPF, Name } = request.body

        const service = new CreateAccountService();

        const result = await service.execute({CPF, Name});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}