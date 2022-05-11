import { resolve } from "path";
import CreateRoleDto from "../dto/role/createRoleDto";
import RoleEntity from "../entity/RoleEntity";
import Role from "../model/Role";
import RoleRepository from "../repositories/RoleRepository";


type RoleRequest = {
    name: string;
    description: string;
}
export class RoleService {

    constructor (
        private readonly repository = new RoleRepository()
    ) {}

    async create(dto: CreateRoleDto): Promise<RoleEntity | Error>{
        try{

            const {name, description} = dto

            const roleAlreadyExists = await this.repository.findByName(name)

            if(roleAlreadyExists) return new Error("Role already exists")

            const newRole = new Role(dto)

            // PROMISE { <PENDING> }
            //const resp = 
            console.log("AQUI: ", newRole)

            return this.repository.create(newRole)

        } catch (error) {
            throw new Error(error)
        }
    }

}