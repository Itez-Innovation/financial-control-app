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
const prisma_service_1 = require("../../service/prisma.service");
let CashInflowRepository = class CashInflowRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ Titulo, Valor, account_id }) {
        return this.prisma.cashInflow.create({
            data: { Titulo: Titulo, Valor: Valor, account_id: account_id },
        });
    }
    async get_all() {
        return this.prisma.cashInflow.findMany();
    }
    async delete(id) {
        await this.prisma.cashInflow.delete({ where: { id: id } });
    }
    async update(id, Titulo, Valor) {
        const inflow = await this.findById(id);
        inflow.Titulo = Titulo ? Titulo : inflow.Titulo;
        inflow.Valor = Valor ? Valor : inflow.Valor;
        return this.prisma.cashInflow.update({
            where: { id: id },
            data: { Titulo: inflow.Titulo, Valor: inflow.Valor },
        });
    }
    async findById(id) {
        return this.prisma.cashInflow.findFirst({
            where: { id: id },
        });
    }
};
CashInflowRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CashInflowRepository);
exports.default = CashInflowRepository;
//# sourceMappingURL=CashInflowRepository.js.map