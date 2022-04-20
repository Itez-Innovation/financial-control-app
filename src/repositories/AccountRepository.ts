import { EntityRepository, Repository } from 'typeorm';
import AccountEntity from '../entity/AccountEntity';

@EntityRepository(AccountEntity)
export default class AccountRepository extends Repository<AccountEntity>{
    public async findByName(Name: string): Promise<AccountEntity[]> {
        return this.find({
            where: {
                Name,
            }
        })
    }
}