"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CashOutflowRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(output) {
        return this.repository.save(output);
    }
    async get_all() {
        return this.repository.find();
    }
    async delete(id) {
        if (!(await this.repository.findOne({ id }))) {
            console.log('Esse gasto não existe!');
        }
        else {
            console.log('Gasto removido!');
            await this.repository.delete({ id });
        }
    }
    async update(id, area, titulo, valor) {
        if (!(await this.repository.findOne({ id }))) {
            console.log('Esse gasto não existe!');
        }
        else {
            const outflow = await this.repository.findOne({ id });
            outflow.Area = area ? area : outflow.Area;
            outflow.Titulo = titulo ? titulo : outflow.Titulo;
            outflow.Valor = valor ? valor : outflow.Valor;
            const saved = await this.repository.save(outflow);
            console.log('Gasto atualizado!');
            return saved;
        }
    }
    findByID(id) {
        return this.repository.findOne({ id });
    }
}
exports.default = CashOutflowRepository;
//# sourceMappingURL=CashOutflowRepository.js.map