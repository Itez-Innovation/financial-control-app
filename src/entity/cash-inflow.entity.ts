import { Account } from './account.entity';

export class CashInflow {
  id?: string;
  Titulo: string;
  Valor: number;
  account_id: string;
  account?: Account;
}
