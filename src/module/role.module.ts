import { Module } from '@nestjs/common';
import { RoleService } from '../service/role.service';
import { RoleController } from '../controller/role.controller';

@Module({
  providers: [RoleService],
  controllers: [RoleController]
})
export class RoleModule {}
