import { Role } from 'src/entity/role.entity';
export declare const IROLE_REPOSITORY = "IRoleRepository";
export default interface IRoleRepository {
    create(role: Role): Promise<Role>;
    findByName(name: string): Promise<Role | undefined>;
    findById(id: string): Promise<Role | undefined>;
    findByIds(ids: string[]): Promise<Role[]>;
}
