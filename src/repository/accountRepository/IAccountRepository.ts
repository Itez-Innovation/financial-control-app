import { account } from '@prisma/client';
import { Account } from 'src/entity/account.entity';

export const IACCOUNT_REPOSITORY = 'IAccountRepository';
export interface IAccountRepository {
  create(account: Account): Promise<account>;
  delete(id: string): Promise<any>;
  get_all(): Promise<account[]>;
  getStats(id: string): Promise<account | any>;
  update(
    id: string,
    CPF: string,
    Name?: string,
    password?: string,
  ): Promise<account>;
  findByCpf(CPF: string): Promise<account | undefined>;
  findById(id: string): Promise<account | undefined>;
}
