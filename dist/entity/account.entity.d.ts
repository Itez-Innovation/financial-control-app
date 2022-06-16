import { RefreshTokenEntity } from './refreshToken.entity';
import { CashInflowEntity } from './cash-inflow.entity';
import { CashOutflowEntity } from './cash-outflow.entity';
import { PermissionEntity } from './permission.entity';
import { RoleEntity } from './role.entity';
export declare class AccountEntity {
    id?: string;
    password: string;
    Name: string;
    CPF: string;
    input?: CashInflowEntity[];
    output?: CashOutflowEntity[];
    refresh?: RefreshTokenEntity;
    roles?: RoleEntity[];
    permissions?: PermissionEntity[];
}
