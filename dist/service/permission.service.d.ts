import IPermissionRepository from 'src/repository/permissionRepository/IPermissionRepository';
export declare class PermissionService {
    private PermissionRepository;
    constructor(PermissionRepository: IPermissionRepository);
    create({ name, description }: {
        name: any;
        description: any;
    }): Promise<import(".prisma/client").permissions>;
}
