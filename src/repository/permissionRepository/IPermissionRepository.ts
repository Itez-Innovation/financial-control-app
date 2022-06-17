import { Permission } from 'src/entity/permission.entity';

export const IPERMISSION_REPOSITORY = 'IPermissionRepository';
export interface IPermissionRepository {
  create(permission: Permission): Promise<Permission>;
  findByName(name: string): Promise<Permission | undefined>;
  findById(id: string): Promise<Permission | undefined>;
  findByIds(ids: string[]): Promise<Permission[] | undefined>;
}
