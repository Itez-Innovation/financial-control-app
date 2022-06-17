import ICashOutflowRepository from 'src/repository/cashOutflowRepository/ICashOutflowRepository';
export declare class CashOutflowService {
    private CashOutflowRepository;
    SERVICE_NAME: string;
    constructor(CashOutflowRepository: ICashOutflowRepository);
    create({ Area, Titulo, Valor, account_id }: {
        Area: any;
        Titulo: any;
        Valor: any;
        account_id: any;
    }): Promise<import(".prisma/client").cashOutflow>;
    delete(id: string): Promise<any>;
    update({ Area, Titulo, Valor, id }: {
        Area: any;
        Titulo: any;
        Valor: any;
        id: any;
    }): Promise<import(".prisma/client").cashOutflow>;
    read(id: string): Promise<import(".prisma/client").cashOutflow>;
    readAll(): Promise<import(".prisma/client").cashOutflow[]>;
}
