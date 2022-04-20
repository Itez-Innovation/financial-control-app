import { getRepository } from "typeorm";
import AccountEntity from "../entity/AccountEntity";
import CashInflowEntity from "../entity/CashInflowEntity";


type CashInflowRequest = {
    Titulo: string;
    Valor: number;
    account_id: string;
}

export class CreateCashInflowService {
    async execute({Titulo, Valor, account_id}: CashInflowRequest): Promise<CashInflowEntity | Error> {
        const repo = getRepository(CashInflowEntity);
        const repoAccount = getRepository(AccountEntity);

        if(!await repoAccount.findOne(account_id)){
            return new Error("Account doesn't exists!");
        }

        const cashInflowEntity = repo.create({
            Titulo,
            Valor,
            account_id
        })

        await repo.save(cashInflowEntity);

        return cashInflowEntity;
    }
}