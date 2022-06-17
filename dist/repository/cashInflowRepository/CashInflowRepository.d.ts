import { PrismaService } from '../../service/prisma.service';
import { ICashInflowRepository } from './ICashInflowRepository';
export default class CashInflowRepository implements ICashInflowRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create({ Titulo, Valor, account_id }: {
        Titulo: any;
        Valor: any;
        account_id: any;
    }): Promise<import(".prisma/client").cashInflow>;
    get_all(): Promise<import(".prisma/client").cashInflow[]>;
    delete(id: string): Promise<void>;
    update(id: string, Titulo?: string, Valor?: number): Promise<import(".prisma/client").cashInflow>;
    findById(id: string): Promise<import(".prisma/client").cashInflow>;
}
