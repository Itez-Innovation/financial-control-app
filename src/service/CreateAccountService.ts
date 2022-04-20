import { getRepository } from "typeorm";
import AccountEntity from "../entity/AccountEntity";

type AccountRequest = {
    CPF: string;
    Name: string;
}

export class CreateAccountService {

    async execute({CPF, Name}:AccountRequest ): Promise<AccountEntity | Error> {
        const repo = getRepository(AccountEntity);

        // SELECT * FROM ACCOUNTENTITY WHERE CPF = "CPF"
        if(await repo.findOne({CPF})) {
            return new Error("Account already exists");
        }

        const accountEntity = repo.create({
            CPF,
            Name
        })

        await repo.save(accountEntity);

        return accountEntity;
    }
}