import { getRepository, Repository } from "typeorm";
import RoleEntity from "../entity/RoleEntity";


export default class RoleRepository {
    private repository: Repository<RoleEntity>

    constructor () {
        this.repository = getRepository(RoleEntity)
    }

    findById(id: string) {
        return this.repository.findOne({id})
    }
}