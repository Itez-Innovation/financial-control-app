import { resolve } from "path";
import CreateRoleDto from "../dto/role/createRoleDto";
import CreateRolePermissionDto from "../dto/role/createRolePermissionDto";
import RoleEntity from "../entity/RoleEntity";
import Role from "../model/Role";
import PermissionRepository from "../repositories/permissionRepository/PermissionRepository";
import IRoleRepository from "../repositories/roleRepository/IRoleRepository";

export class RoleService {

    constructor (
        private readonly repository: IRoleRepository,
        private readonly repoPermissions = new PermissionRepository()
    ) {}

    async create(dto: CreateRoleDto): Promise<RoleEntity | Error>{
        try{
            if(await this.repository.findByName(dto.name)) throw new Error("Role already exists!")

            return this.repository.create(new Role(dto))

        } catch (error) {
            throw new Error(error)
        }
    }

    async createRolePermission (dto: CreateRolePermissionDto) {
        try{
            const role = await this.repository.findById(dto.roleId);

            if(!role) throw new Error("Role does not exists!")

            const permissionsExist = await this.repoPermissions.findByIds(dto.permissions);

            if(!permissionsExist) throw new Error("Permissions does not exists!")

            role.permissions = permissionsExist;

            return await this.repository.create(role)

        } catch (error) {
            throw new Error(error)
        }
    }

}