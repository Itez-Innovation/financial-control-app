import { Injectable } from '@nestjs/common';
import NotFoundError from '../exceptions/not-found.error';
import CustomError from '../exceptions/custom.error';
import { PrismaService } from './prisma.service';

@Injectable()
export class CashInflowService {
  constructor(private prisma: PrismaService) {}

  async create({ Titulo, Valor, account_id }) {
    try {
      return await this.prisma.cashInflow.create({
        data: { Titulo: Titulo, Valor: Valor, account_id: account_id },
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async delete(id: string) {
    try {
      const inputFound = await this.prisma.cashInflow.findFirst({
        where: { id: id },
      });

      if (!inputFound) throw new NotFoundError('Input not found');

      return this.prisma.cashInflow.delete({
        where: { id: id },
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async update({ Titulo, Valor, id }) {
    try {
      const inputFound = await this.prisma.cashInflow.findFirst({
        where: { id: id },
      });

      if (!inputFound) throw new NotFoundError('Input not found');

      return this.prisma.cashInflow.update({
        where: { id: id },
        data: { Titulo: Titulo, Valor: Valor },
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async read(id: string) {
    try {
      const inputFound = await this.repository.findByID(id);

      if (!inputFound) throw new Error('Input not found');

      return this.repository.findByID(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async readAll() {
    try {
      const inputsFound = await this.repository.get_all();

      if (!inputsFound) throw new Error('Inputs not found');

      return this.repository.get_all();
    } catch (error) {
      throw new Error(error);
    }
  }
}
