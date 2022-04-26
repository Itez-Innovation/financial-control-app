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

    async delete(id: string){
        if(!await this.repository.findOne({id})){
            console.log("Esse ganho não existe!")
        } else {
            await this.repository.delete({id})
            console.log("Ganho removido!")
        }
    }

    async update(id: string, titulo: string, valor: number){
        if(!await this.repository.findOne({id})){
            console.log("Esse ganho não existe!")
        } else {
            const inflow = await this.repository.findOne({id})
            inflow.Titulo = titulo ? titulo : inflow.Titulo;
            inflow.Valor = valor ? valor : inflow.Valor;

            await this.repository.save(inflow);
            console.log("Ganho atualizado!")
        }

        
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
