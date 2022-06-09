import { permissions } from '@prisma/client';
import { PrismaService } from '../../service/prisma.service';
import IPermissionRepository from './IPermissionRepository';
export default class PermissionRepository implements IPermissionRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(permission: permissions): Promise<permissions>;
    findByName(name: string): import(".prisma/client").Prisma.Prisma__permissionsClient<permissions>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__permissionsClient<permissions>;
    findByIds(ids: string[]): import(".prisma/client").PrismaPromise<permissions[]>;
}
