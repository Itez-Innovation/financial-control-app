import { Account } from './account.entity';
import { Permission } from './permission.entity';

export class Role {
  id?: string;
  name: string;
  description: string;
  accounts?: Account[];
  permissions?: Permission[];
}
