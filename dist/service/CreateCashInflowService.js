"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCashInflowService = void 0;
const typeorm_1 = require("typeorm");
const AccountEntity_1 = require("../entity/AccountEntity");
const CashInflowEntity_1 = require("../entity/CashInflowEntity");
class CreateCashInflowService {
    async execute({ Titulo, Valor, account_id }) {
        const repo = (0, typeorm_1.getRepository)(CashInflowEntity_1.default);
        const repoAccount = (0, typeorm_1.getRepository)(AccountEntity_1.default);
        if (!await repoAccount.findOne(account_id)) {
            return new Error("Account doesn't exists!");
        }
        const cashInflowEntity = repo.create({
            Titulo,
            Valor,
            account_id
        });
        await repo.save(cashInflowEntity);
        return cashInflowEntity;
    }
}
exports.CreateCashInflowService = CreateCashInflowService;
//# sourceMappingURL=CreateCashInflowService.js.map