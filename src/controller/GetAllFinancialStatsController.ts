import { Request, Response } from "express";
import { GetAllFinancialStatsService } from "../service/GetAllFinancialStatsService";

export class GetAllFinancialStatsController {
    async handle(request: Request, response: Response){
        const service = new GetAllFinancialStatsService();

        const accounts = await service.execute();
        return response.json(accounts);
    }
}