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

    async delete(id: string){
        if(!await this.repository.findOne({id})){
            console.log("Esse gasto não existe!")
        } else {
            console.log("Gasto removido!");
            await this.repository.delete({id})
        }
    }

    async update(id: string, area: string, titulo: string, valor: number){
        if(!await this.repository.findOne({id})){
            console.log("Esse gasto não existe!")
        } else {
            const outflow = await this.repository.findOne({id})
            outflow.Area = area ? area : outflow.Area;
            outflow.Titulo = titulo ? titulo : outflow.Titulo;
            outflow.Valor = valor ? valor : outflow.Valor;

            await this.repository.save(outflow);

            console.log("Gasto atualizado!");
        }

        
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