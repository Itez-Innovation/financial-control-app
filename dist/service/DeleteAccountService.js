"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAccountService = void 0;
const typeorm_1 = require("typeorm");
const AccountEntity_1 = require("../entity/AccountEntity");
class DeleteAccountService {
    async execute(id) {
        const repo = (0, typeorm_1.getRepository)(AccountEntity_1.default);
        if (!await repo.findOne(id)) {
            return new Error("This account doesn't exists!");
        }
        await repo.delete(id);
    }
}
exports.DeleteAccountService = DeleteAccountService;
//# sourceMappingURL=DeleteAccountService.js.map