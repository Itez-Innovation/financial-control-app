import { CashOutflowService } from '../service/cash-outflow.service';
export declare class CashOutflowController {
    private readonly cashOutflowService;
    constructor(cashOutflowService: CashOutflowService);
    create(account_id: string, createData: {
        Area: any;
        Titulo: any;
        Valor: any;
    }): Promise<import(".prisma/client").cashOutflow>;
    delete(id: string): Promise<import(".prisma/client").cashOutflow>;
    update(id: string, updateData: {
        Area?: string;
        Titulo?: string;
        Valor?: number;
    }): Promise<import(".prisma/client").cashOutflow>;
    read(id: string): Promise<import(".prisma/client").cashOutflow>;
    readAll(): Promise<import(".prisma/client").cashOutflow[]>;
}
