import { cashInflow } from '@prisma/client';
export declare const ICASHINFLOW_REPOSITORY = "ICashInflowRepository";
export interface ICashInflowRepository {
    create({ Titulo, Valor, account_id }: {
        Titulo: any;
        Valor: any;
        account_id: any;
    }): Promise<cashInflow>;
    get_all(): Promise<cashInflow[]>;
    delete(id: string): Promise<any>;
    update(id: string, Titulo?: string, Valor?: number): Promise<cashInflow>;
    findById(id: string): Promise<cashInflow | undefined>;
}
