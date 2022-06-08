"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CashInflowRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(input) {
        return this.repository.save(input);
    }
    async get_all() {
        return this.repository.find();
    }
    async delete(id) {
        if (!(await this.repository.findOne({ id }))) {
            console.log('Esse ganho não existe!');
        }
        else {
            await this.repository.delete({ id });
            console.log('Ganho removido!');
        }
    }
    async update(id, titulo, valor) {
        if (!(await this.repository.findOne({ id }))) {
            console.log('Esse ganho não existe!');
        }
        else {
            const inflow = await this.repository.findOne({ id });
            inflow.Titulo = titulo ? titulo : inflow.Titulo;
            inflow.Valor = valor ? valor : inflow.Valor;
            const saved = await this.repository.save(inflow);
            console.log('Ganho atualizado!');
            return saved;
        }
    }
    findByID(id) {
        return this.repository.findOne({ id });
    }
}
exports.default = CashInflowRepository;
//# sourceMappingURL=CashInflowRepository.js.map