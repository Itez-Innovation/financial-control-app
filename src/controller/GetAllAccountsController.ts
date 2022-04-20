import { Request, Response } from "express";
import { GetAllAccountsService } from "../service/GetAllAccountsService";


export class GetAllAccountsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllAccountsService();

        const accounts = await service.execute();

        return response.json(accounts);
    }
}