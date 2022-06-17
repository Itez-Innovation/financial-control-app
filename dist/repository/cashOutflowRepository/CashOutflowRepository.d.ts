import { PrismaService } from '../../service/prisma.service';
import ICashOutflowRepository from './ICashOutflowRepository';
export declare class CashOutflowRepository implements ICashOutflowRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create({ Area, Titulo, Valor, account_id }: {
        Area: any;
        Titulo: any;
        Valor: any;
        account_id: any;
    }): Promise<import(".prisma/client").cashOutflow>;
    get_all(): Promise<import(".prisma/client").cashOutflow[]>;
    delete(id: string): Promise<import(".prisma/client").cashOutflow>;
    update(id: string, area?: string, titulo?: string, valor?: number): Promise<import(".prisma/client").cashOutflow>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__cashOutflowClient<import(".prisma/client").cashOutflow>;
    findByTitulo(Titulo: string): Promise<import(".prisma/client").cashOutflow>;
    findByArea(Area: string): Promise<import(".prisma/client").cashOutflow>;
}
