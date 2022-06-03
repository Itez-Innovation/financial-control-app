import { Body, Controller, Param, Post } from '@nestjs/common';
import { RoleService } from 'src/service/role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('create')
  async create(@Body() createData: { name: string; description: string }) {
    const { name, description } = createData;

    return this.roleService.create({
      name,
      description,
    });
  }

  @Post('permission/:id')
  async createRolePermission(
    @Param('id') id: string,
    @Body() permissions: string[],
  ) {
    return this.roleService.createRolePermission({ roleId: id, permissions });
  }
}
