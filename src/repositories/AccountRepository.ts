import { DeepPartial, EntityRepository, getRepository, Repository } from 'typeorm';
import AccountEntity from '../entity/AccountEntity';
import Account from '../model/Account';

@EntityRepository(AccountEntity)
export default class AccountRepository{
    private repository: Repository<AccountEntity>
    constructor(){
        this.repository = getRepository(AccountEntity)
    }
    // public async findByName(Name: string): Promise<AccountEntity[]> {
    //     return this.find({
    //         where: {
    //             Name,
    //         }
    //     })
    // }

    async create(account: Account){
        return this.repository.save(account)
    }

    async delete(id: string){

        if(!await this.repository.findOne({id})) {
            return new Error("This account doesn't exists!");
        }

        await this.repository.delete(id);
    }

    async update(id: string, CPF?: string, Name?:string){

        if(!await this.repository.findOne({id})) {
            return new Error("This account doesn't exists!");
        }

        const acc = await this.repository.findOne({id})
        acc.CPF = CPF ? CPF : acc.CPF;
        acc.Name = Name ? Name : acc.Name;

        await this.repository.save(acc);

        return acc;
    }

    async get_all(){
        const accounts = await this.repository.find();
        console.log(accounts)

        return accounts;
    }
}