import { Request, Response } from "express";
import { DeleteAccountService } from "../service/DeleteAccountService";



export class DeleteAccountController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new DeleteAccountService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}