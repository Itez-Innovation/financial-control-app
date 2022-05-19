import { resolve } from "path";
import CreateRoleDto from "../dto/role/createRoleDto";
import CreateRolePermissionDto from "../dto/role/createRolePermissionDto";
import RoleEntity from "../entity/RoleEntity";
import Role from "../model/Role";
import PermissionRepository from "../repositories/permissionRepository/PermissionRepository";
import RoleRepository from "../repositories/roleRepository/RoleRepository";

export class RoleService {

    constructor (
        private readonly repository = new RoleRepository(),
        private readonly repoPermissions = new PermissionRepository()
    ) {}

    async create(dto: CreateRoleDto): Promise<RoleEntity | Error>{
        try{

            const { name, description } = dto

            const roleAlreadyExists = await this.repository.findByName(name)

            if(roleAlreadyExists) throw new Error("Role already exists!")

            const newRole = new Role(dto)

            return this.repository.create(newRole)

        } catch (error) {
            throw new Error(error)
        }
    }

    async createRolePermission (dto: CreateRolePermissionDto) {
        try{
            const { roleId, permissions } = dto

            const role = await this.repository.findById(roleId);

            if(!role) throw new Error("Role does not exists!")

            const permissionsExist = await this.repoPermissions.findByIds(permissions);

            if(!permissionsExist) throw new Error("Permissions does not exists!")

            role.permissions = permissionsExist;

            return await this.repository.create(role)

        } catch (error) {
            throw new Error(error)
        }
    }

}