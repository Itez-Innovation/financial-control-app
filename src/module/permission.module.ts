import { Module } from '@nestjs/common';
import { PrismaService } from 'src/service/prisma.service';
import { PermissionController } from '../controller/permission.controller';
import { PermissionService } from '../service/permission.service';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService, PrismaService],
})
export class PermissionModule {}
