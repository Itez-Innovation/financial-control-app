import { PermissionEntity } from './permission.entity';
export declare class RoleEntity {
    id?: string;
    name: string;
    description: string;
    permissions?: PermissionEntity[];
}
