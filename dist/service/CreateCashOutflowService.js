"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCashOutflowService = void 0;
const typeorm_1 = require("typeorm");
const AccountEntity_1 = require("../entity/AccountEntity");
const CashOutflowEntity_1 = require("../entity/CashOutflowEntity");
class CreateCashOutflowService {
    async execute({ Area, Titulo, Valor, account_id }) {
        const repo = (0, typeorm_1.getRepository)(CashOutflowEntity_1.default);
        const repoAccount = (0, typeorm_1.getRepository)(AccountEntity_1.default);
        if (!await repoAccount.findOne(account_id)) {
            return new Error("Account doesn't exists!");
        }
        const cashOutflowEntity = repo.create({
            Area,
            Titulo,
            Valor,
            account_id
        });
        await repo.save(cashOutflowEntity);
        return cashOutflowEntity;
    }
}
exports.CreateCashOutflowService = CreateCashOutflowService;
//# sourceMappingURL=CreateCashOutflowService.js.map