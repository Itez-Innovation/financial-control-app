"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(account) {
        return this.repository.save(account);
    }
    async delete(id) {
        return this.repository.delete({ id });
    }
    async update(id, CPF, Name, password) {
        const acc = await this.repository.findOne({ id });
        acc.CPF = CPF ? CPF : acc.CPF;
        acc.Name = Name ? Name : acc.Name;
        acc.password = (await hash(password, 8)) ? password : acc.password;
        await this.repository.save(acc);
        console.log(acc);
        return acc;
    }
    async get_all() {
        return this.repository.find();
    }
    async getStats(idS) {
        return this.repository.find({
            relations: ['inputs', 'outputs'],
            where: { id: idS },
        });
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