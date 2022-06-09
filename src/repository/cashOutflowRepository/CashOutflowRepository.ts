import { PrismaService } from '../../service/prisma.service';
import ICashOutflowRepository from './ICashOutflowRepository';

export default class CashOutflowRepository implements ICashOutflowRepository {
  constructor(private prisma: PrismaService) {}

  async create(output) {
    return this.prisma.cashOutflow.create(output);
  }

  async get_all() {
    return this.prisma.cashOutflow.findMany();
  }

  async delete(id: string) {
    return this.prisma.cashOutflow.delete({
      where: { id: id },
    });
  }

  async update(id: string, area?: string, titulo?: string, valor?: number) {
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

  findById(id: string) {
    return this.prisma.cashOutflow.findFirst({
      where: { id: id },
    });
  }

  async findByTitulo(Titulo: string) {
    return this.prisma.cashOutflow.findFirst({
      where: { Titulo: Titulo },
    });
  }

  async findByArea(Area: string) {
    return this.prisma.cashOutflow.findFirst({
      where: { Area: Area },
    });
  }
}
