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

    async delete(CPF: string){

        if(!await this.repository.findOne({CPF})) {
            return new Error("Essa conta não existe!");
        }

        await this.repository.delete(CPF);
    }

    async update(id: string, CPF: string, Name?:string){

        if(!await this.repository.findOne({CPF})) {
            return new Error("Essa conta não existe!");
        }

        const acc = await this.repository.findOne({CPF})
        acc.CPF = CPF ? CPF : acc.CPF;
        acc.Name = Name ? Name : acc.Name;

        await this.repository.save(acc);

        return acc;
    }

    async get_all(){
        const accounts = await this.repository.find();
        return accounts;
    }

    async findByCpf(CPF: string){

        if(!await this.repository.findOne({CPF})) {
            return new Error("Essa conta não existe!");
        }

        const acct = await this.repository.findOne({CPF})
        return acct
    }
}