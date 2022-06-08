import { Injectable } from '@nestjs/common';
import NotFoundError from '../exceptions/not-found.error';
import CustomError from '../exceptions/custom.error';
import ICashInflowRepository from '../repository/cashInflowRepository/ICashInflowRepository';

@Injectable()
export class CashInflowService {
  constructor(private CashInflowRepository: ICashInflowRepository) {}

  async create({ Titulo, Valor, account_id }) {
    try {
      return await this.CashInflowRepository.create({
        Titulo,
        Valor,
        account_id,
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async delete(id: string) {
    try {
      const inputFound = await this.CashInflowRepository.findById(id);

      if (!inputFound) throw new NotFoundError('Input not found');

      return this.CashInflowRepository.delete(id);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async update({ Titulo, Valor, id }) {
    try {
      const inputFound = await this.CashInflowRepository.findById(id);

      if (!inputFound) throw new NotFoundError('Input not found');

      return this.CashInflowRepository.update(id, Titulo, Valor);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async read(id: string) {
    try {
      const inputFound = await this.CashInflowRepository.findById(id);

      if (!inputFound) throw new NotFoundError('Input not found');

      return inputFound;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async readAll() {
    try {
      const inputsFound = await this.CashInflowRepository.get_all();

      if (!inputsFound) throw new NotFoundError('Inputs not found');

      return inputsFound;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }
}
