import { PrismaService } from '../../service/prisma.service';
import IRoleRepository from './IRoleRepository';

export default class RoleRepository implements IRoleRepository {
  constructor(private prisma: PrismaService) {}

  async create(role: Role | RoleEntity) {
    return this.repository.save(role);
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
