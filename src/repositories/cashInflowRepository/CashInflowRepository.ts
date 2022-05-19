import { EntityRepository, getRepository, Repository } from 'typeorm';
import CashInflowEntity from '../../entity/CashInflowEntity';
import Input from '../../model/CashInflow';
import ICashInflowRepository from './ICashInflowRepository';

@EntityRepository(CashInflowEntity)
export default class CashInflowRepository implements ICashInflowRepository{
    private repository: Repository<CashInflowEntity>
    constructor(){
        this.repository = getRepository(CashInflowEntity)
    }

    async create(input: Input){
        return this.repository.save(input)
    }

    async get_all(){
        return this.repository.find();
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

            const saved = await this.repository.save(inflow);
            console.log("Ganho atualizado!")
            return saved
        }
    }

    findByID(id: string){
        return this.repository.findOne({id})
    }
    
}
