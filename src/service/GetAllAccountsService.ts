import { getRepository } from "typeorm";
import AccountEntity from "../entity/AccountEntity";




export class GetAllAccountsService {
    async execute(){
        const repo = getRepository(AccountEntity);

        const accounts = await repo.find();

        return accounts;
    }
}