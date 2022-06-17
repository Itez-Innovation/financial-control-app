import { ICashInflowRepository } from '../repository/cashInflowRepository/ICashInflowRepository';
export declare class CashInflowService {
    private CashInflowRepository;
    constructor(CashInflowRepository: ICashInflowRepository);
    create({ Titulo, Valor, account_id }: {
        Titulo: any;
        Valor: any;
        account_id: any;
    }): Promise<import(".prisma/client").cashInflow>;
    delete(id: string): Promise<any>;
    update({ Titulo, Valor, id }: {
        Titulo: any;
        Valor: any;
        id: any;
    }): Promise<import(".prisma/client").cashInflow>;
    read(id: string): Promise<import(".prisma/client").cashInflow>;
    readAll(): Promise<import(".prisma/client").cashInflow[]>;
}
