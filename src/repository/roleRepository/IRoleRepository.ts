export default interface IRoleRepository {
  create(role: Role | RoleEntity): Promise<RoleEntity>;
  findByName(name: string): Promise<RoleEntity | undefined>;
  findById(id: string): Promise<RoleEntity | undefined>;
  findByIds(ids: string[]): Promise<RoleEntity[]>;
}
