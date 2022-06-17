import { Module } from '@nestjs/common';
import { IPERMISSION_REPOSITORY } from 'src/repository/permissionRepository/IPermissionRepository';
import PermissionRepository from 'src/repository/permissionRepository/PermissionRepository';
import { PrismaService } from 'src/service/prisma.service';
import { PermissionController } from '../controller/permission.controller';
import { PermissionService } from '../service/permission.service';

@Module({
  controllers: [PermissionController],
  providers: [
    PermissionService,
    PrismaService,
    { provide: IPERMISSION_REPOSITORY, useClass: PermissionRepository },
  ],
  exports: [PermissionService],
})
export class PermissionModule {}
