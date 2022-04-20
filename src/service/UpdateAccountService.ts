import { getRepository } from "typeorm";
import AccountEntity from "../entity/AccountEntity";

type AccountUpdateRequest = {
    id: string;
    CPF: string;
    Name: string;
}

export class UpdateAccountService {
    async execute({id, CPF, Name}: AccountUpdateRequest) {
        const repo = getRepository(AccountEntity);

        const account = await repo.findOne(id);

        if(!account){
            return new Error("Account doesn't exists!");
        }

        account.CPF = CPF ? CPF : account.CPF;
        account.Name = Name ? Name : account.Name;

        await repo.save(account);

        return account;
    }
}