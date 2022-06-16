"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const prisma_service_1 = require("../../service/prisma.service");
let AccountRepository = class AccountRepository {
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
};
AccountRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AccountRepository);
exports.default = AccountRepository;
//# sourceMappingURL=AccountRepository.js.map