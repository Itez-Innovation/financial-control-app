import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Account } from 'src/entity/account.entity';
import { Role } from 'src/entity/role.entity';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requireRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requireRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    const userRole = await this.prisma.roles.findMany({
      where: {
        accounts: {
          some: {
            id: user.id,
          },
        },
      },
    });

    console.log(requireRoles);

    return matchRoles(requireRoles, userRole);
  }
}
function matchRoles(role: string[], roles: Role[]): boolean {
  role.forEach((element) => {
    roles.forEach((element2) => {
      if (element == element2.name) {
        console.log(`retornei true! ${element} = ${element2.name}`);
        return true;
      }
    });
  });

  return false;
}
