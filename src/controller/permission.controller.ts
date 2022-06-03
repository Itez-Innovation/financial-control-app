import { Body, Controller, Post } from '@nestjs/common';
import { PermissionService } from '../service/permission.service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post('create')
  async create(@Body() createData: { name: string; description: string }) {
    const { name, description } = createData;

    return this.permissionService.create({
      name,
      description,
    });
  }
}
