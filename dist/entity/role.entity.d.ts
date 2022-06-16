import { Account } from './account.entity';
import { Permission } from './permission.entity';
export declare class Role {
    id?: string;
    name: string;
    description: string;
    accounts?: Account[];
    permissions?: Permission[];
}
