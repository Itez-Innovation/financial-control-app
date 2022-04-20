"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllFinancialStatsService = void 0;
const typeorm_1 = require("typeorm");
const CashInflowEntity_1 = require("../entity/CashInflowEntity");
const CashOutflowEntity_1 = require("../entity/CashOutflowEntity");
class GetAllFinancialStatsService {
    async execute() {
        const repoInflow = (0, typeorm_1.getRepository)(CashInflowEntity_1.default);
        const repoOutflow = (0, typeorm_1.getRepository)(CashOutflowEntity_1.default);
        let stats;
        const inputs = await repoInflow.find({
            relations: ["account"],
        });
        const outputs = await repoOutflow.find({
            relations: ["account"]
        });
        stats = inputs.concat(outputs);
        console.log(stats);
        return stats;
    }
}
exports.GetAllFinancialStatsService = GetAllFinancialStatsService;
//# sourceMappingURL=GetAllFinancialStatsService.js.map