import { AccountEntity } from './account.entity';
export declare class CashOutflowEntity {
    id: string;
    Area: string;
    Titulo: string;
    Valor: number;
    account_id: string;
    account?: AccountEntity;
}
