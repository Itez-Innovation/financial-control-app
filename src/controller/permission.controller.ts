import { Controller } from '@nestjs/common';
import { PermissionService } from '../service/permission.service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}
}
