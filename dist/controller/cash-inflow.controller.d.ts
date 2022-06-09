import { CashInflowService } from '../service/cash-inflow.service';
export declare class CashInflowController {
    private readonly cashInflowService;
    constructor(cashInflowService: CashInflowService);
    create(account_id: string, createData: {
        Titulo: any;
        Valor: any;
    }): Promise<import(".prisma/client").cashInflow>;
    delete(id: string): Promise<any>;
    update(id: string, updateData: {
        Titulo: any;
        Valor: any;
    }): Promise<import(".prisma/client").cashInflow>;
    read(id: string): Promise<import(".prisma/client").cashInflow>;
    readAll(): Promise<import(".prisma/client").cashInflow[]>;
}
