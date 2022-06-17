import { cashOutflow } from '@prisma/client';
export declare const ICASHOUTFLOW_REPOSITORY = "ICashOutflowRepository";
export default interface ICashOutflowRepository {
    create({ Area, Titulo, Valor, account_id }: {
        Area: any;
        Titulo: any;
        Valor: any;
        account_id: any;
    }): Promise<cashOutflow>;
    get_all(): Promise<cashOutflow[]>;
    delete(id: string): Promise<any>;
    update(id: string, area?: string, titulo?: string, valor?: number): Promise<cashOutflow>;
    findById(id: string): Promise<cashOutflow | undefined>;
    findByTitulo(Titulo: string): Promise<cashOutflow | undefined>;
    findByArea(Area: string): Promise<cashOutflow | undefined>;
}
