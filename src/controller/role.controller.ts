import { Controller } from '@nestjs/common';
import { RoleService } from 'src/service/role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  async create() {
    try {
      const { name, description } = request.body;

      const response = await service.create({ name, description });

      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ code: 400, message: 'internal server error' });
    }
  }

  async createRolePermission() {
    try {
      const { roleId } = request.params;
      const { permissions } = request.body;

      const response = await service.createRolePermission({
        roleId,
        permissions,
      });

      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ code: 400, message: 'internal server error' });
    }
  }
}
