import { getRepository } from "typeorm";
import AccountEntity from "../entity/AccountEntity";



export class DeleteAccountService {
    async execute(id: string) {
        const repo = getRepository(AccountEntity);

        if(!await repo.findOne(id)) {
            return new Error("This account doesn't exists!");
        }

        await repo.delete(id);
    }
}