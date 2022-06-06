import { CashOutflowService } from '../service/cash-outflow.service';
export declare class CashOutflowController {
    private readonly cashOutflowService;
    constructor(cashOutflowService: CashOutflowService);
    create(createData: {
        Area: any;
        Titulo: any;
        Valor: any;
        account_id: any;
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
