import { getRepository, Repository } from "typeorm";
import PermissionEntity from "../entity/PermissionEntity";


export default class PermissionRepository {

    private repository: Repository<PermissionEntity>

    constructor () {
        this.repository = getRepository(PermissionEntity)
    }
}