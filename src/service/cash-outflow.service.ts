import { Injectable } from '@nestjs/common';
import NotFoundError from '../exceptions/not-found.error';
import CustomError from '../exceptions/custom.error';
import { PrismaService } from './prisma.service';

@Injectable()
export class CashOutflowService {
  constructor(private prisma: PrismaService) {}

  async create({ Area, Titulo, Valor, account_id }) {
    try {
      return this.prisma.cashOutflow.create({
        data: {
          Area: Area,
          Titulo: Titulo,
          Valor: Valor,
          account_id: account_id,
        },
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  async delete(id: string) {
    try {
      const outputFound = await this.prisma.cashOutflow.findFirst({
        where: { id: id },
      });

      if (!outputFound) throw new NotFoundError('Output not found');

      return this.prisma.cashOutflow.delete({
        where: { id: id },
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  async update(dto: UpdateOutputDto, id: string) {
    try {
      const { Area, Titulo, Valor } = dto;

      const outputFound = await this.repository.findByID(id);

      if (!outputFound) throw new Error('Output not found');

      return this.repository.update(id, Area, Titulo, Valor);
    } catch (error) {
      throw new Error(error);
    }
  }

  async read(id: string) {
    try {
      const outputFound = await this.repository.findByID(id);

      if (!outputFound) throw new Error('Output not found');

      return this.repository.findByID(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async readAll() {
    try {
      const OutputsFound = await this.repository.get_all();

      if (!OutputsFound) throw new Error('Outputs not found');

      return this.repository.get_all();
    } catch (error) {
      throw new Error(error);
    }
  }
}
