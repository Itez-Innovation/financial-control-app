import AccountEntity from "../../entity/AccountEntity";
import Account from "../../model/Account";

export default interface IAccountRepository {
    create(account: Account | AccountEntity): Promise<Account | AccountEntity>;
    delete(id: string): Promise<any>;
    get_all(): Promise<AccountEntity[]>;
    getStats(idS: string): Promise<AccountEntity[]>;
    update(id: string, CPF: string, Name?:string, password?: string): Promise<AccountEntity>;
    findByCpf(CPF: string): Promise<AccountEntity | undefined>;
    findById(id: string): Promise<AccountEntity | undefined>;
}