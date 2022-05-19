import CreateInputDto from "../dto/input/createInputDto";
import UpdateInputDto from "../dto/input/updateInputDto";
import Input from "../model/CashInflow";
import ICashInflowRepository from "../repositories/cashInflowRepository/ICashInflowRepository";

export class CashInflowService {

    constructor(
        private readonly repository: ICashInflowRepository
    ) {}

    async create(dto: CreateInputDto){
        try{
            const newInput = new Input(dto)

            console.log(newInput)

            return this.repository.create(newInput)

        } catch (error){
            throw new Error(error)
        }
    }

    async delete(id: string) {
        try{
            const inputFound = await this.repository.findByID(id)

            if(!inputFound) throw new Error("Input not found")

            return this.repository.delete(id)
        } catch(error) {
            throw new Error(error)
        }
    }

    async update(dto: UpdateInputDto, id: string){
        try{
            const { Titulo, Valor } = dto

            const inputFound = await this.repository.findByID(id)

            if(!inputFound) throw new Error("Input not found")

            return this.repository.update(id, Titulo, Valor)

        } catch(error){
            throw new Error(error)
        }
    }

    async read(id: string){
        try{
            const inputFound = await this.repository.findByID(id)

            if(!inputFound) throw new Error("Input not found")

            return this.repository.findByID(id)

        } catch(error){
            throw new Error(error)
        }
    }

    async readAll(){
        try{
            const inputsFound = await this.repository.get_all()

            if(!inputsFound) throw new Error("Inputs not found")

            return this.repository.get_all()

        } catch(error){
            throw new Error(error)
        }
    }


}






