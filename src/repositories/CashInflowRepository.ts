import { EntityRepository, Repository } from 'typeorm';
import CashInflow from '../entity/CashInflow';

@EntityRepository(CashInflow)
export default class AccountRepository extends Repository<CashInflow>{
    public async findByTitulo(Titulo: string): Promise<CashInflow[]> {
        return this.find({
            where: {
                Titulo,
            }
        })
    }

    public async findById(id: number): Promise<CashInflow[]> {
        return this.find({
            where: {
                id,
            }
        })
    }
}
