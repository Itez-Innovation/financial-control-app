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

    async create(name: string, description: string){
        try{

            const roleAlreadyExists = await this.repository.findByName(name)

            if(roleAlreadyExists) return new Error("Role already exists")

            const newRole = new Role({name, description})

            // PROMISE { <PENDING> }
            const resp = this.repository.create(newRole)
            // console.log("AQUI: ", resp)

            return resp

        } catch (error) {
            throw new Error(error)
        }
    }

}