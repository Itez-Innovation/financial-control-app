import { Account } from './account.entity';
export declare class CashOutflow {
    id: string;
    Area: string;
    Titulo: string;
    Valor: number;
    account_id: string;
    account?: Account;
}
