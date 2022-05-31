import { PermissionEntity } from './permission.entity';
export declare class RoleEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    permissions: PermissionEntity[];
}
