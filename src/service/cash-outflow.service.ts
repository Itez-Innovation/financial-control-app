import { Inject, Injectable } from '@nestjs/common';
import NotFoundError from '../exceptions/not-found.error';
import CustomError from '../exceptions/custom.error';
import ICashOutflowRepository, {
  ICASHOUTFLOW_REPOSITORY,
} from 'src/repository/cashOutflowRepository/ICashOutflowRepository';

@Injectable()
export class CashOutflowService {
  SERVICE_NAME = 'CASHOUTFLOW_SERVICE';

  constructor(
    @Inject(ICASHOUTFLOW_REPOSITORY)
    private CashOutflowRepository: ICashOutflowRepository,
  ) {}

  async create({ Area, Titulo, Valor, account_id }) {
    try {
      return this.CashOutflowRepository.create({
        account_id,
        Area,
        Titulo,
        Valor,
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  async delete(id: string) {
    try {
      const outputFound = await this.CashOutflowRepository.findById(id);

      if (!outputFound) throw new NotFoundError('Output not found');

      return this.CashOutflowRepository.delete(id);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  async update({ Area, Titulo, Valor, id }) {
    try {
      const outputFound = await this.CashOutflowRepository.findById(id);

      if (!outputFound) throw new NotFoundError('Output not found');

      return this.CashOutflowRepository.update(id, Area, Titulo, Valor);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  async read(id: string) {
    try {
      const outputFound = await this.CashOutflowRepository.findById(id);

      if (!outputFound) throw new NotFoundError('Output not found');

      return outputFound;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  async readAll() {
    try {
      const OutputsFound = await this.CashOutflowRepository.get_all();

      if (!OutputsFound) throw new NotFoundError('Output not found');

      return OutputsFound;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }
}
