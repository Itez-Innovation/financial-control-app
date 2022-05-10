import Output from "../model/CashOutflow";
import CreateOutputDto from "../dto/output/createOutputDto"
import UpdateOutputDto from "../dto/output/updateOutputDto"
import CashOutflowRepository from "../repositories/CashOutflowRepository";

export class CashOutflowService {

    constructor(
        private readonly repository = new CashOutflowRepository()
    ) {}

    async create(dto: CreateOutputDto){
        try{
            const { Area, Titulo, Valor, account_id } = dto

            const newOutput = new Output(dto)

            console.log(newOutput)

            return this.repository.create(newOutput)

        } catch (error){
            throw new Error(error)
        }
    }

    async delete(id: string) {
        try{
            const outputFound = await this.repository.findByID(id)

            if(!outputFound) throw new Error("Output not found")

            return this.repository.delete(id)
        } catch(error) {
            throw new Error(error)
        }
    }

    async update(dto: UpdateOutputDto, id: string){
        try{
            const { Area, Titulo, Valor } = dto

            const outputFound = await this.repository.findByID(id)

            if(!outputFound) throw new Error("Output not found")

            return this.repository.update(id, Area, Titulo, Valor)

        } catch(error){
            throw new Error(error)
        }
    }

    async read(id: string){
        try{
            const outputFound = await this.repository.findByID(id)

            if(!outputFound) throw new Error("Output not found")

            return this.repository.findByID(id)

        } catch(error){
            throw new Error(error)
        }
    }

    async readAll(){
        try{
            const OutputsFound = await this.repository.get_all()

            if(!OutputsFound) throw new Error("Outputs not found")

            return this.repository.get_all()

        } catch(error){
            throw new Error(error)
        }
    }

}