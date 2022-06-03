import { PrismaService } from './prisma.service';
export declare class PermissionService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ name, description }: {
        name: any;
        description: any;
    }): Promise<import(".prisma/client").permissions>;
}
