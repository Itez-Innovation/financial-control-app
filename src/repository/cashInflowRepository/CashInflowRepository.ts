import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../service/prisma.service';
import { ICashInflowRepository } from './ICashInflowRepository';

@Injectable()
export default class CashInflowRepository implements ICashInflowRepository {
  constructor(private prisma: PrismaService) {}

  async create({ Titulo, Valor, account_id }) {
    return this.prisma.cashInflow.create({
      data: { Titulo: Titulo, Valor: Valor, account_id: account_id },
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
