import { PrismaService } from '../../service/prisma.service';
import IPermissionRepository from './IPermissionRepository';

export default class PermissionRepository implements IPermissionRepository {
  constructor(private prisma: PrismaService) {}

  async create(permission) {
    return this.prisma.permissions.create(permission);
  }

  findByName(name: string) {
    return this.prisma.permissions.findFirst({
      where: { name: name },
    });
  }

  findById(id: string) {
    return this.prisma.permissions.findFirst({
      where: { id: id },
    });
  }

  findByIds(ids: string[]) {
    return this.prisma.permissions.findMany({
      where: { id: { in: ids } },
    });
  }
}
