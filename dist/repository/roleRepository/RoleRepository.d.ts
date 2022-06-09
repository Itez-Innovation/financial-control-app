import { roles } from '@prisma/client';
import { PrismaService } from '../../service/prisma.service';
import IRoleRepository from './IRoleRepository';
export default class RoleRepository implements IRoleRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(role: roles): Promise<roles>;
    findByName(name: string): import(".prisma/client").Prisma.Prisma__rolesClient<roles>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__rolesClient<roles>;
    findByIds(ids: string[]): import(".prisma/client").PrismaPromise<roles[]>;
}
