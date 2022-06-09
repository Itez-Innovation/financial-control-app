"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
class AccountRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ CPF, Name, password }) {
        return this.prisma.account.create({
            data: { CPF: CPF, Name: Name, password: password },
        });
    }
    async delete(id) {
        return this.prisma.account.delete({ where: { id: id } });
    }
    async update(id, CPF, Name, password) {
        const acc = await this.findById(id);
        acc.CPF = CPF ? CPF : acc.CPF;
        acc.Name = Name ? Name : acc.Name;
        acc.password = (await (0, bcryptjs_1.hash)(password, 8)) ? password : acc.password;
        return this.prisma.account.update({
            where: { id: id },
            data: { CPF: acc.CPF, Name: acc.Name, password: acc.password },
        });
    }
    async get_all() {
        return this.prisma.account.findMany();
    }
    async getStats(id) {
        return this.prisma.account.findMany({
            include: { input: true, output: true },
            where: { id: id },
        });
    }
    async findByCpf(CPF) {
        return this.prisma.account.findFirst({
            where: { CPF },
        });
    }
    async findById(id) {
        return this.prisma.account.findFirst({
            where: { id },
        });
    }
}
exports.default = AccountRepository;
//# sourceMappingURL=AccountRepository.js.map