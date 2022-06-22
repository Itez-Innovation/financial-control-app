import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Account } from 'src/entity/account.entity';
import { Role } from 'src/entity/role.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requireRoles) {
      return true;
    }

    const { user }: { user: Account } = context.switchToHttp().getRequest();

    console.log(user.roles);

    return requireRoles.some((Role) => user.roles.includes(Role));
  }
}
