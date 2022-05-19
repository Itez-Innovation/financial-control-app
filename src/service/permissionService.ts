import CreatePermissionDto from "../dto/permission/createPermissionDto";
import PermissionEntity from "../entity/PermissionEntity";
import Permission from "../model/Permission";
import IPermissionRepository from "../repositories/permissionRepository/IPermissionRepository";

export class PermissionService {

    constructor (
        private readonly repository: IPermissionRepository
    ) {}

    async create(dto: CreatePermissionDto): Promise<PermissionEntity | Error>{
        try{

            const {name, description} = dto

            const permissionAlreadyExists = await this.repository.findByName(name)

            if(permissionAlreadyExists) throw new Error("Permission already exists!")

            const newPermission = new Permission(dto)

            return this.repository.create(newPermission)

        } catch (error) {
            throw new Error(error)
        }
    }
}