import { cashInflow } from '@prisma/client';

export default interface ICashInflowRepository {
  create(cashInflow): Promise<cashInflow>;
  get_all(): Promise<cashInflow[]>;
  delete(id: string): Promise<any>;
  update(id: string, Titulo?: string, Valor?: number): Promise<cashInflow>;
  findById(id: string): Promise<cashInflow | undefined>;
}
