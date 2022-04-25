import { EntityRepository, getRepository, Repository } from 'typeorm';
import CashInflowEntity from '../entity/CashInflowEntity';
import Input from '../model/CashInflow';

@EntityRepository(CashInflowEntity)
export default class CashInflowRepository{
    private repository: Repository<CashInflowEntity>
    constructor(){
        this.repository = getRepository(CashInflowEntity)
    }

    async create(input: Input){
        await this.repository.save(input)
    }

    async get_all(){
        const inputs = await this.repository.find();
        return inputs;
    }

    

    // public async findByTitulo(Titulo: string): Promise<CashInflowEntity[]> {
    //     return this.find({
    //         where: {
    //             Titulo,
    //         }
    //     })
    // }

    // public async findById(id: number): Promise<CashInflowEntity[]> {
    //     return this.find({
    //         where: {
    //             id,
    //         }
    //     })
    // }
    
}
