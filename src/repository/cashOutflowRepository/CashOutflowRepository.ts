import { PrismaService } from '../../service/prisma.service';
import ICashOutflowRepository from './ICashOutflowRepository';

export default class CashOutflowRepository implements ICashOutflowRepository {
  constructor(private prisma: PrismaService) {}

  async create(output: Output) {
    return this.repository.save(output);
  }

  async get_all() {
    return this.repository.find();
  }

  async delete(id: string) {
    if (!(await this.repository.findOne({ id }))) {
      console.log('Esse gasto não existe!');
    } else {
      console.log('Gasto removido!');
      await this.repository.delete({ id });
    }
  }

  async update(id: string, area: string, titulo: string, valor: number) {
    if (!(await this.repository.findOne({ id }))) {
      console.log('Esse gasto não existe!');
    } else {
      const outflow = await this.repository.findOne({ id });
      outflow.Area = area ? area : outflow.Area;
      outflow.Titulo = titulo ? titulo : outflow.Titulo;
      outflow.Valor = valor ? valor : outflow.Valor;

      const saved = await this.repository.save(outflow);

      console.log('Gasto atualizado!');

      return saved;
    }
  }

  // public async findByTitulo(Titulo: string): Promise<CashOutflow[]> {
  //     return this.find({
  //         where: {
  //             Titulo,
  //         }
  //     })
  // }

  // public async findByArea(Area: string): Promise<CashOutflow[]> {
  //     return this.find({
  //         where: {
  //             Area,
  //         }
  //     })
  // }

  findByID(id: string) {
    return this.repository.findOne({ id });
  }
}
