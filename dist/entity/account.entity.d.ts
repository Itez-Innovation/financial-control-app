import RefreshTokenEntity from './refreshToken.entity';
import CashInflowEntity from './cashInflow.entity';
import CashOutflowEntity from './cashOutflowEntity';
import PermissionEntity from './permission.entity';
import RoleEntity from './role.entity';
export default class AccountEntity {
    id: string;
    password: string;
    Name: string;
    CPF: string;
    input: CashInflowEntity[];
    output: CashOutflowEntity[];
    refresh: RefreshTokenEntity;
    createdAt: Date;
    updatedAt: Date;
    roles: RoleEntity[];
    permissions: PermissionEntity[];
}
