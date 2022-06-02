import { Controller } from '@nestjs/common';
import { RoleService } from 'src/service/role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
}
