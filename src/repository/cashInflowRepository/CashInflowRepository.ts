import { cashInflow } from '@prisma/client';
import { PrismaService } from '../../service/prisma.service';
import ICashInflowRepository from './ICashInflowRepository';

export default class CashInflowRepository implements ICashInflowRepository {
  constructor(private prisma: PrismaService) {}

  async create(cashInflow: cashInflow) {
    return this.prisma.cashInflow.create({
      data: cashInflow,
    });
  }

  async get_all() {
    return this.prisma.cashInflow.findMany();
  }

  async delete(id: string) {
    await this.prisma.cashInflow.delete({ where: { id: id } });
  }

  async update(id: string, Titulo?: string, Valor?: number) {
    const inflow = await this.findById(id);

    inflow.Titulo = Titulo ? Titulo : inflow.Titulo;
    inflow.Valor = Valor ? Valor : inflow.Valor;

    return this.prisma.cashInflow.update({
      where: { id: id },
      data: { Titulo: inflow.Titulo, Valor: inflow.Valor },
    });
  }

  async findById(id: string) {
    return this.prisma.cashInflow.findFirst({
      where: { id: id },
    });
  }
}
