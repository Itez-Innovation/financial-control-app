import { PrismaService } from './prisma.service';
export declare class CashOutflowService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ Area, Titulo, Valor, account_id }: {
        Area: any;
        Titulo: any;
        Valor: any;
        account_id: any;
    }): Promise<import(".prisma/client").cashOutflow>;
    delete(id: string): Promise<import(".prisma/client").cashOutflow>;
    update({ Area, Titulo, Valor, id }: {
        Area: any;
        Titulo: any;
        Valor: any;
        id: any;
    }): Promise<import(".prisma/client").cashOutflow>;
    read(id: string): Promise<import(".prisma/client").cashOutflow>;
    readAll(): Promise<any>;
}
