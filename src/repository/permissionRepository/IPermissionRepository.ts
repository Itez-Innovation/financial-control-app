export default interface IPermissionRepository {
  create(permission: Permission): Promise<PermissionEntity>;
  findByName(name: string): Promise<PermissionEntity | undefined>;
  findById(id: string): Promise<PermissionEntity | undefined>;
  findByIds(ids: string[]): Promise<PermissionEntity[] | undefined>;
}
