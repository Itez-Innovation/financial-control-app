"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AccountEntity_1 = require("../entity/AccountEntity");
class AccountRepository {
    constructor() {
        (this.repository = (0, typeorm_1.getRepository)(AccountEntity_1.default));
    }
    async create(account) {
        return this.repository.save(account);
    }
    async delete(id) {
        return this.repository.delete({ id });
    }
    async update(id, CPF, Name) {
        const acc = await this.repository.findOne({ id });
        acc.CPF = CPF ? CPF : acc.CPF;
        acc.Name = Name ? Name : acc.Name;
        await this.repository.save(acc);
        return acc;
    }
    async get_all() {
        const accounts = await this.repository.find();
        return accounts;
    }
    findByCpf(CPF) {
        return this.repository.findOne({ CPF });
    }
    findById(id) {
        return this.repository.findOne({ id });
    }
}
exports.default = AccountRepository;
//# sourceMappingURL=AccountRepository.js.map