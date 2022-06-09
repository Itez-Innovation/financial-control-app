import { cashOutflow } from '@prisma/client';
import { PrismaService } from '../../service/prisma.service';
import ICashOutflowRepository from './ICashOutflowRepository';
export default class CashOutflowRepository implements ICashOutflowRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(cashOutflow: cashOutflow): Promise<cashOutflow>;
    get_all(): Promise<cashOutflow[]>;
    delete(id: string): Promise<cashOutflow>;
    update(id: string, area?: string, titulo?: string, valor?: number): Promise<cashOutflow>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__cashOutflowClient<cashOutflow>;
    findByTitulo(Titulo: string): Promise<cashOutflow>;
    findByArea(Area: string): Promise<cashOutflow>;
}
