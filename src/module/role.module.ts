import { Module } from '@nestjs/common';
import { RoleService } from '../service/role.service';
import { RoleController } from '../controller/role.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  providers: [RoleService, PrismaService],
  controllers: [RoleController],
})
export class RoleModule {}
