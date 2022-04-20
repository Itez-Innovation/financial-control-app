"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountService = void 0;
const typeorm_1 = require("typeorm");
const AccountEntity_1 = require("../entity/AccountEntity");
class UpdateAccountService {
    async execute({ id, CPF, Name }) {
        const repo = (0, typeorm_1.getRepository)(AccountEntity_1.default);
        const account = await repo.findOne(id);
        if (!account) {
            return new Error("Account doesn't exists!");
        }
        account.CPF = CPF ? CPF : account.CPF;
        account.Name = Name ? Name : account.Name;
        await repo.save(account);
        return account;
    }
}
exports.UpdateAccountService = UpdateAccountService;
//# sourceMappingURL=UpdateAccountService.js.map