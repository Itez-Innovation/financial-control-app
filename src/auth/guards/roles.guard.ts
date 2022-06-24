import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Account } from 'src/entity/account.entity';
import { Role } from 'src/entity/role.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requireRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requireRoles) {
      return true;
    }

    const { user }: { user: Account } = context.switchToHttp().getRequest();

    console.log(user);

    return matchRoles(requireRoles, user.roles);
  }
}
function matchRoles(role: string[], roles: Role[]): boolean {
  let secondElement;

  role.forEach((element) => {
    roles.forEach((element2) => {
      secondElement = String(element2);
      if (element == secondElement) {
        return true;
      }
    });
  });

  return false;
}
