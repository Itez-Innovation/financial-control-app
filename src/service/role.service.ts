import { Injectable } from '@nestjs/common';
import CustomError from '../exceptions/custom.error';
import ConflictError from '../exceptions/conflict.exception';
import { PrismaService } from './prisma.service';
import NotFoundError from '../exceptions/not-found.exception';
import { Role } from 'src/entity/role.entity';

@Injectable()
export class RoleService {
  SERVICE_NAME = 'ROLE_SERVICE';

  constructor(private prisma: PrismaService) {}

  async create({ name, description }) {
    try {
      if (await this.findByName(name))
        throw new ConflictError(`This role already exists`);

      return this.prisma.roles.create({
        data: { name, description },
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  async createRolePermission({ roleId, permissions }) {
    try {
      const role: Role = await this.findById(roleId);

      if (!role) throw new NotFoundError('Role does not exists!');

      const { permissoes } = permissions;

      const permissionsExist = await this.prisma.permissions.findMany({
        where: {
          id: {
            in: permissoes,
          },
        },
      });

      if (!permissionsExist)
        throw new NotFoundError('Permissions does not exists!');

      console.log();

      role.permissions = permissionsExist;

      return await this.prisma.roles.update({
        where: { id: roleId },
        data: {
          permissions: {
            connect: {
              id: permissionsExist.at(0).id,
            },
          },
        },
        include: {
          permissions: true,
        },
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async findByName(name: string) {
    return this.prisma.roles.findFirst({
      where: { name: name },
    });
  }

  async findById(id: string) {
    return this.prisma.roles.findFirst({
      where: { id: id },
    });
  }
}
