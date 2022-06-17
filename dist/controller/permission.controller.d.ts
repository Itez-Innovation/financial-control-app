import { PermissionService } from '../service/permission.service';
export declare class PermissionController {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    create(createData: {
        name: string;
        description: string;
    }): Promise<import("../entity/permission.entity").Permission>;
}
