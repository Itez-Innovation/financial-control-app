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
let CashOutflowRepository = class CashOutflowRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ Area, Titulo, Valor, account_id }) {
        return this.prisma.cashOutflow.create({
            data: {
                Area: Area,
                Titulo: Titulo,
                Valor: Valor,
                account_id: account_id,
            },
        });
    }
    async get_all() {
        return this.prisma.cashOutflow.findMany();
    }
    async delete(id) {
        return this.prisma.cashOutflow.delete({
            where: { id: id },
        });
    }
    async update(id, area, titulo, valor) {
        const outflow = await this.prisma.cashOutflow.findFirst({
            where: { id: id },
        });
        outflow.Area = area ? area : outflow.Area;
        outflow.Titulo = titulo ? titulo : outflow.Titulo;
        outflow.Valor = valor ? valor : outflow.Valor;
        return this.prisma.cashOutflow.update({
            where: { id: id },
            data: {
                Area: outflow.Area,
                Titulo: outflow.Titulo,
                Valor: outflow.Valor,
            },
        });
    }
    findById(id) {
        return this.prisma.cashOutflow.findFirst({
            where: { id: id },
        });
    }
    async findByTitulo(Titulo) {
        return this.prisma.cashOutflow.findFirst({
            where: { Titulo: Titulo },
        });
    }
    async findByArea(Area) {
        return this.prisma.cashOutflow.findFirst({
            where: { Area: Area },
        });
    }
};
CashOutflowRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CashOutflowRepository);
exports.default = CashOutflowRepository;
//# sourceMappingURL=CashOutflowRepository.js.map