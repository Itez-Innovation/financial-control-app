import { EntityRepository, getRepository, Repository } from 'typeorm';
import CashOutflowEntity from '../entity/CashOutflowEntity';
import Output from '../model/CashOutflow';

@EntityRepository(CashOutflowEntity)
export default class CashOutflowRepository{
    private repository: Repository<CashOutflowEntity>
    constructor(){
        this.repository = getRepository(CashOutflowEntity)
    }

    async create(output: Output){
        await this.repository.save(output);
    }

    async get_all(){
        const outputs = await this.repository.find();
        return outputs;
    }

    // public async findByTitulo(Titulo: string): Promise<CashOutflow[]> {
    //     return this.find({
    //         where: {
    //             Titulo,
    //         }
    //     })
    // }

    // public async findByArea(Area: string): Promise<CashOutflow[]> {
    //     return this.find({
    //         where: {
    //             Area,
    //         }
    //     })
    // }

    // public async findById(id: number): Promise<CashOutflow[]> {
    //     return this.find({
    //         where: {
    //             id,
    //         }
    //     })
    // }

    // public async findByValor(Valor: number): Promise<CashOutflow[]> {
    //     return this.find({
    //         where: {
    //             Valor,
    //         }
    //     })
    // }
}