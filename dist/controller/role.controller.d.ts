import { RoleService } from 'src/service/role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createData: {
        name: string;
        description: string;
    }): Promise<import(".prisma/client").roles>;
    createRolePermission(roleId: string, permissions: string[]): Promise<import(".prisma/client").roles>;
}
