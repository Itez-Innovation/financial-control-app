import { cashInflow } from '@prisma/client';
import { PrismaService } from '../../service/prisma.service';
import ICashInflowRepository from './ICashInflowRepository';
export default class CashInflowRepository implements ICashInflowRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(cashInflow: cashInflow): Promise<cashInflow>;
    get_all(): Promise<cashInflow[]>;
    delete(id: string): Promise<void>;
    update(id: string, Titulo?: string, Valor?: number): Promise<cashInflow>;
    findById(id: string): Promise<cashInflow>;
}
