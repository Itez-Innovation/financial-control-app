import { Account } from 'src/entity/account.entity';

export const IACCOUNT_REPOSITORY = 'IAccountRepository';
export interface IAccountRepository {
  create(account: Account): Promise<Account>;
  delete(id: string): Promise<any>;
  get_all(): Promise<Account[]>;
  getStats(id: string): Promise<Account | any>;
  update(
    id: string,
    CPF: string,
    Name?: string,
    password?: string,
  ): Promise<Account>;
  findByCpf(CPF: string): Promise<Account | undefined>;
  findById(id: string): Promise<Account | undefined>;
}
