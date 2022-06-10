"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CashInflowRepository {
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
}
exports.default = CashInflowRepository;
//# sourceMappingURL=CashInflowRepository.js.map