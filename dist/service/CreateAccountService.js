"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountService = void 0;
const typeorm_1 = require("typeorm");
const AccountEntity_1 = require("../entity/AccountEntity");
class CreateAccountService {
    async execute({ CPF, Name }) {
        const repo = (0, typeorm_1.getRepository)(AccountEntity_1.default);
        // SELECT * FROM ACCOUNTENTITY WHERE CPF = "CPF"
        if (await repo.findOne({ CPF })) {
            return new Error("Account already exists");
        }
        const accountEntity = repo.create({
            CPF,
            Name
        });
        await repo.save(accountEntity);
        return accountEntity;
    }
}
exports.CreateAccountService = CreateAccountService;
//# sourceMappingURL=CreateAccountService.js.map