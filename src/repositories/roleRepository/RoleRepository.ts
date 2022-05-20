import { EntityRepository, getRepository, Repository } from "typeorm";
import RoleEntity from "../../entity/RoleEntity";
import Role from "../../model/Role";
import IRoleRepository from "./IRoleRepository";

@EntityRepository(RoleEntity)
export default class RoleRepository implements IRoleRepository {
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

    findByIds(ids: string[]) {
        return this.repository.findByIds(ids)
    }
}