import { Module } from '@nestjs/common';
import PermissionRepository from 'src/repository/permissionRepository/PermissionRepository';
import { PrismaService } from 'src/service/prisma.service';
import { PermissionController } from '../controller/permission.controller';
import { PermissionService } from '../service/permission.service';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService, PrismaService],
  imports: [PermissionRepository],
})
export class PermissionModule {}
