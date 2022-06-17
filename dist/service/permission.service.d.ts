import { IPermissionRepository } from 'src/repository/permissionRepository/IPermissionRepository';
export declare class PermissionService {
    private PermissionRepository;
    SERVICE_NAME: string;
    constructor(PermissionRepository: IPermissionRepository);
    create({ name, description }: {
        name: any;
        description: any;
    }): Promise<import("../entity/permission.entity").Permission>;
}
