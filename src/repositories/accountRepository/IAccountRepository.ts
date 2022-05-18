import AccountEntity from "../../entity/AccountEntity";
import Account from "../../model/Account";

export default interface IAccountRepository {
    create(account: Account | AccountEntity): Promise<AccountEntity>;
    findByCpf(CPF: string): Promise<AccountEntity | undefined>
    findById(id: string): Promise<AccountEntity | undefined>
}