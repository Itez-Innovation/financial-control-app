import { roles } from '@prisma/client';

export default interface IRoleRepository {
  create(role: roles): Promise<roles>;
  findByName(name: string): Promise<roles | undefined>;
  findById(id: string): Promise<roles | undefined>;
  findByIds(ids: string[]): Promise<roles[]>;
}
