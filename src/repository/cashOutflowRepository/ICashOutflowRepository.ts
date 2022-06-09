import { cashOutflow } from '@prisma/client';

export default interface ICashOutflowRepository {
  create(cashOutflow): Promise<cashOutflow>;
  get_all(): Promise<cashOutflow[]>;
  delete(id: string): Promise<any>;
  update(
    id: string,
    area?: string,
    titulo?: string,
    valor?: number,
  ): Promise<cashOutflow>;
  findById(id: string): Promise<cashOutflow | undefined>;
  findByTitulo(Titulo: string): Promise<cashOutflow | undefined>;
  findByArea(Area: string): Promise<cashOutflow | undefined>;
}
