import { AccountEntity } from './account.entity';
export declare class CashInflowEntity {
    id?: string;
    Titulo: string;
    Valor: number;
    account_id: string;
    account?: AccountEntity;
}
