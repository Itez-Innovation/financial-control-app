import { getRepository } from "typeorm";
import AccountEntity from "../entity/AccountEntity";
import CashOutflowEntity from "../entity/CashOutflowEntity";


type CashOutflowRequest = {
    Area: string;
    Titulo: string;
    Valor: number;
    account_id: string;
}

export class CreateCashOutflowService {
    async execute({Area, Titulo, Valor, account_id}: CashOutflowRequest): Promise<CashOutflowEntity | Error> {
        const repo = getRepository(CashOutflowEntity);
        const repoAccount = getRepository(AccountEntity);

        if(!await repoAccount.findOne(account_id)){
            return new Error("Account doesn't exists!");
        }

        const cashOutflowEntity = repo.create({
            Area,
            Titulo,
            Valor,
            account_id
        })

        await repo.save(cashOutflowEntity);

        return cashOutflowEntity;
    }
}