import { PrismaService } from '../../service/prisma.service';
import IPermissionRepository from './IPermissionRepository';

export default class PermissionRepository implements IPermissionRepository {
  constructor(private prisma: PrismaService) {}

  async create(permission: Permission) {
    return this.repository.save(permission);
  }

  findByName(name: string) {
    return this.repository.findOne({ name });
  }

  findById(id: string) {
    return this.repository.findOne({ id });
  }

  findByIds(ids: string[]) {
    return this.repository.findByIds(ids);
  }
}
