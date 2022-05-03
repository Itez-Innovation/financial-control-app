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
    async update(CPF, Name, id) {
        try {
            const accountFound = await this.repository.findById(id);
            if (!accountFound)
                throw new Error("Account not found");
            return this.repository.update(id, CPF, Name);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async read(id) {
        try {
            const accountFound = await this.repository.findById(id);
            if (!accountFound)
                throw new Error("Account not found");
            return this.repository.findById(id);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async readAll() {
        try {
            const accountsFound = await this.repository.get_all();
            if (!accountsFound)
                throw new Error("Account not found");
            return this.repository.get_all();
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=accountService.js.map