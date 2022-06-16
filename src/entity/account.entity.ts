import { RefreshToken } from './refreshToken.entity';
import { CashInflow } from './cash-inflow.entity';
import { CashOutflow } from './cash-outflow.entity';
import { Permission } from './permission.entity';
import { Role } from './role.entity';

export class Account {
  id?: string;
  password: string;
  Name: string;
  CPF: string;
  input?: CashInflow[];
  output?: CashOutflow[];
  permissions?: Permission[];
  roles?: Role[];
  refresh?: RefreshToken;
}
