import Account from './account.entity';
export default class CashInflowEntity {
    id: string;
    Titulo: string;
    Valor: number;
    account_id: string;
    account: Account;
    createdAt: Date;
    updatedAt: Date;
}
