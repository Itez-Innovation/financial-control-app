"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CashOutflowRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(cashOutflow) {
        return this.prisma.cashOutflow.create({
            data: cashOutflow,
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
}
exports.default = CashOutflowRepository;
//# sourceMappingURL=CashOutflowRepository.js.map