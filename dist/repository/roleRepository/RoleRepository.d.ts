import { Role } from 'src/entity/role.entity';
import { PrismaService } from '../../service/prisma.service';
import IRoleRepository from './IRoleRepository';
export default class RoleRepository implements IRoleRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(role: Role): Promise<import(".prisma/client").roles>;
    findByName(name: string): import(".prisma/client").Prisma.Prisma__rolesClient<import(".prisma/client").roles>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__rolesClient<import(".prisma/client").roles>;
    findByIds(ids: string[]): import(".prisma/client").PrismaPromise<import(".prisma/client").roles[]>;
}
