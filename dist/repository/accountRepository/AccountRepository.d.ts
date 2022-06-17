import { account } from '@prisma/client';
import { Account } from 'src/entity/account.entity';
import { PrismaService } from '../../service/prisma.service';
import { IAccountRepository } from './IAccountRepository';
export default class AccountRepository implements IAccountRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(account: Account): Promise<account>;
    delete(id: string): Promise<account>;
    update(id: string, CPF: string, Name?: string, password?: string): Promise<account>;
    get_all(): Promise<account[]>;
    getStats(id: string): Promise<(account & {
        input: import(".prisma/client").cashInflow[];
        output: import(".prisma/client").cashOutflow[];
    })[]>;
    findByCpf(CPF: string): Promise<account>;
    findById(id: string): Promise<account>;
}
