
import Account from "../model/Account";
import CreateAccountDto from "../dto/account/createAccountDto";
import AccountRepository from "../repositories/AccountRepository";


export class AccountService {

    constructor(
        private readonly repository = new AccountRepository()
    ) {}


    async create(dto: CreateAccountDto) {

        try{

            const {CPF} = dto

            const accountAlreadyExists = await this.repository.findByCpf(CPF)

            if(accountAlreadyExists) throw new Error("Account already exists")

            const newAccount = new Account(dto)

            console.log(newAccount)

            return this.repository.create(newAccount);

        }catch (error) {
            throw new Error(error)
        }
    }

    async delete(id: string) {
        try{

            const accountFound = await this.repository.findById(id)

            if(!accountFound) throw new Error("Account not found")

            return this.repository.delete(id)

        }catch(error) {
            throw new Error(error)
        }
    }

}