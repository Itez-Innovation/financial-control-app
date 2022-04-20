"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllFinancialStatsController = void 0;
const GetAllFinancialStatsService_1 = require("../service/GetAllFinancialStatsService");
class GetAllFinancialStatsController {
    async handle(request, response) {
        const service = new GetAllFinancialStatsService_1.GetAllFinancialStatsService();
        const accounts = await service.execute();
        return response.json(accounts);
    }
}
exports.GetAllFinancialStatsController = GetAllFinancialStatsController;
//# sourceMappingURL=GetAllFinancialStatsController.js.map