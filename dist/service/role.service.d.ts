import { PrismaService } from './prisma.service';
export declare class RoleService {
    private prisma;
    SERVICE_NAME: string;
    constructor(prisma: PrismaService);
    create({ name, description }: {
        name: any;
        description: any;
    }): Promise<import(".prisma/client").roles>;
    createRolePermission({ roleId, permissions }: {
        roleId: any;
        permissions: any;
    }): Promise<import(".prisma/client").roles>;
    findByName(name: string): Promise<import(".prisma/client").roles>;
    findById(id: string): Promise<import(".prisma/client").roles>;
}
