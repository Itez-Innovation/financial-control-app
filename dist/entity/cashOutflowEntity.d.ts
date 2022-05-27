import Account from './account.entity';
export default class CashOutflowEntity {
    id: string;
    Area: string;
    Titulo: string;
    Valor: number;
    account_id: string;
    account: Account;
    createdAt: Date;
    updatedAt: Date;
}
