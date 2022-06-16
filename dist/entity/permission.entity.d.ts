import { Account } from './account.entity';
import { Role } from './role.entity';
export declare class Permission {
    id?: string;
    name: string;
    description: string;
    accounts?: Account[];
    roles?: Role[];
}
