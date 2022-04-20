import { getRepository } from "typeorm";
import AccountEntity from "../entity/AccountEntity";
import CashInflowEntity from "../entity/CashInflowEntity";
import CashOutflowEntity from "../entity/CashOutflowEntity";

export class GetAllFinancialStatsService {
    async execute() {
        const repoInflow = getRepository(CashInflowEntity);
        const repoOutflow = getRepository(CashOutflowEntity);
        let stats

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