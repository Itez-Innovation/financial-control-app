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

  async update({ Area, Titulo, Valor, id }) {
    try {
      const outputFound = await this.prisma.cashOutflow.findFirst({
        where: { id: id },
      });

      if (!outputFound) throw new NotFoundError('Output not found');

      return this.prisma.cashOutflow.update({
        data: { Area: Area, Titulo: Titulo, Valor: Valor },
        where: { id: id },
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  async read(id: string) {
    try {
      const outputFound = await this.prisma.cashOutflow.findFirst({
        where: { id: id },
      });

      if (!outputFound) throw new NotFoundError('Output not found');

      return outputFound;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  async readAll() {
    try {
      const OutputsFound = await this.prisma.cashOutflow.findMany();

      if (!OutputsFound) throw new NotFoundError('Output not found');

      return OutputsFound;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }
}
