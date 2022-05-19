import { getRepository, Repository } from "typeorm";
import RoleEntity from "../../entity/RoleEntity";
import Role from "../../model/Role";


export default class RoleRepository {
    private repository: Repository<RoleEntity>

    constructor () {
        this.repository = getRepository(RoleEntity)
    }

    async create(role: Role | RoleEntity){
        return this.repository.save(role)
    }

    findByName(name: string) {
        return this.repository.findOne({name})
    }

    findById(id: string) {
        return this.repository.findOne({id})
    }
}