import { EntityRepository, Repository } from 'typeorm';
import Account from '../entity/Account';

@EntityRepository(Account)
export default class AccountRepository extends Repository<Account>{
    public async findByName(Name: string): Promise<Account[]> {
        return this.find({
            where: {
                Name,
            }
        })
    }
}