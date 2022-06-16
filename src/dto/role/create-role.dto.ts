import { Role } from 'src/entity/role.entity';

export class CreateRoleDto extends Role {
  name: string;
  description: string;
}
