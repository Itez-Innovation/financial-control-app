import { Module } from '@nestjs/common';
import { PermissionController } from '../controller/permission.controller';
import { PermissionService } from '../service/permission.service';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService]
})
export class PermissionModule {}
