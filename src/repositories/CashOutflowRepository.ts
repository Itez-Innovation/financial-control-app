import { EntityRepository, Repository } from 'typeorm';
import CashOutflow from '../entity/CashOutflow';

@EntityRepository(CashOutflow)
export default class CashOutflowRepository extends Repository<CashOutflow>{
    public async findByTitulo(Titulo: string): Promise<CashOutflow[]> {
        return this.find({
            where: {
                Titulo,
            }
        })
    }

    public async findByArea(Area: string): Promise<CashOutflow[]> {
        return this.find({
            where: {
                Area,
            }
        })
    }

    public async findById(id: number): Promise<CashOutflow[]> {
        return this.find({
            where: {
                id,
            }
        })
    }

    public async findByValor(Valor: number): Promise<CashOutflow[]> {
        return this.find({
            where: {
                Valor,
            }
        })
    }
}