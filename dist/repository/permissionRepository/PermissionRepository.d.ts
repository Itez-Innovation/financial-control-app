import { Permission } from 'src/entity/permission.entity';
import { PrismaService } from '../../service/prisma.service';
import { IPermissionRepository } from './IPermissionRepository';
export default class PermissionRepository implements IPermissionRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(permission: Permission): Promise<import(".prisma/client").permissions>;
    findByName(name: string): import(".prisma/client").Prisma.Prisma__permissionsClient<import(".prisma/client").permissions>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__permissionsClient<import(".prisma/client").permissions>;
    findByIds(ids: string[]): import(".prisma/client").PrismaPromise<import(".prisma/client").permissions[]>;
}
