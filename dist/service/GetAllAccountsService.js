"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAccountsService = void 0;
const typeorm_1 = require("typeorm");
const AccountEntity_1 = require("../entity/AccountEntity");
class GetAllAccountsService {
    async execute() {
        const repo = (0, typeorm_1.getRepository)(AccountEntity_1.default);
        const accounts = await repo.find();
        return accounts;
    }
}
exports.GetAllAccountsService = GetAllAccountsService;
//# sourceMappingURL=GetAllAccountsService.js.map