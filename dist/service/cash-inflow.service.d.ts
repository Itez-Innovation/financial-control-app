import { PrismaService } from './prisma.service';
export declare class CashInflowService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ Titulo, Valor, account_id }: {
        Titulo: any;
        Valor: any;
        account_id: any;
    }): Promise<import(".prisma/client").cashInflow>;
    delete(id: string): Promise<import(".prisma/client").cashInflow>;
    update({ Titulo, Valor, id }: {
        Titulo: any;
        Valor: any;
        id: any;
    }): Promise<import(".prisma/client").cashInflow>;
    read(id: string): Promise<import(".prisma/client").cashInflow>;
    readAll(): Promise<import(".prisma/client").cashInflow[]>;
}
