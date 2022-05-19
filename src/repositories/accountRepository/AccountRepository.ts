import { getRepository, Repository } from 'typeorm';
import AccountEntity from '../../entity/AccountEntity';
import { hash } from "bcryptjs"
import Account from '../../model/Account';
import IAccountRepository from './IAccountRepository';

export default class AccountRepository implements IAccountRepository{

    private repository: Repository<AccountEntity>

    constructor() {
        this.repository = getRepository(AccountEntity)
    }

    async create(account: Account | AccountEntity){
        return this.repository.save(account)
    }

    async delete(id: string){
        return this.repository.delete({id});
    }

    async update(id: string, CPF: string, Name?:string, password?: string){

        const acc = await this.repository.findOne({id})
        acc.CPF = CPF ? CPF : acc.CPF;
        acc.Name = Name ? Name : acc.Name;
        acc.password = await hash(password, 8) ? password : acc.password;

        await this.repository.save(acc);

        return acc;
    }

    async get_all(){
        return this.repository.find();
    }

    async getStats(idS: string){
        return this.repository.find({
            relations: ['inputs', 'outputs'],
            where: { id: idS }
        })
    }

    findByCpf(CPF: string){
        return this.repository.findOne({CPF})
    }

    findById(id: string) {
        return this.repository.findOne({id})
    }

}