import { Permission } from 'src/entity/permission.entity';

export class CreatePermissionDto extends Permission {
  name: string;
  description: string;
}
