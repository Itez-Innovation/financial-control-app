import { EntityRepository, getRepository, Repository } from "typeorm";
import PermissionEntity from "../../entity/PermissionEntity";
import Permission from "../../model/Permission";
import IPermissionRepository from "./IPermissionRepository";

@EntityRepository(PermissionEntity)
export default class PermissionRepository implements IPermissionRepository{

    private repository: Repository<PermissionEntity>

    constructor () {
        this.repository = getRepository(PermissionEntity)
    }

    async create(permission: Permission){
        return this.repository.save(permission)
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