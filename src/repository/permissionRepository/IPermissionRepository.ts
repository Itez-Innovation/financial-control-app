import { permissions } from '@prisma/client';

export default interface IPermissionRepository {
  create(permission: permissions): Promise<permissions>;
  findByName(name: string): Promise<permissions | undefined>;
  findById(id: string): Promise<permissions | undefined>;
  findByIds(ids: string[]): Promise<permissions[] | undefined>;
}
