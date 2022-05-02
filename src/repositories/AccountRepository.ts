import { getRepository, Repository } from 'typeorm';
import AccountEntity from '../entity/AccountEntity';

import Account from '../model/Account';

export default class AccountRepository{

    private repository: Repository<AccountEntity>

    constructor() {
        (this.repository = getRepository(AccountEntity))
    }

    async create(account: Account){
        return this.repository.save(account)
    }

    async delete(id: string){
        return this.repository.delete({id});
    }

    async update(id: string, CPF: string, Name?:string){

        const acc = await this.repository.findOne({id})
        acc.CPF = CPF ? CPF : acc.CPF;
        acc.Name = Name ? Name : acc.Name;

        await this.repository.save(acc);

        return acc;
    }

    async get_all(){
        const accounts = await this.repository.find();
        return accounts;
    }

    findByCpf(CPF: string){
        return this.repository.findOne({CPF})
    }

    findById(id: string) {
        return this.repository.findOne({id})
    }

}