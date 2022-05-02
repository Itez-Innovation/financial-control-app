"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const Account_1 = require("../model/Account");
const AccountRepository_1 = require("../repositories/AccountRepository");
class AccountService {
    constructor(repository = new AccountRepository_1.default()) {
        this.repository = repository;
    }
    async create(dto) {
        try {
            const { CPF } = dto;
            const accountAlreadyExists = await this.repository.findByCpf(CPF);
            if (accountAlreadyExists)
                throw new Error("Account already exists");
            const newAccount = new Account_1.default(dto);
            console.log(newAccount);
            return this.repository.create(newAccount);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async delete(id) {
        try {
            const accountFound = await this.repository.findById(id);
            if (!accountFound)
                throw new Error("Account not found");
            return this.repository.delete(id);
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=accountService.js.map