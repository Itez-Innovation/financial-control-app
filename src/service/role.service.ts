import { Injectable } from '@nestjs/common';
import CustomError from '../exceptions/custom.error';
import ConflictError from '../exceptions/conflict.error';
import { PrismaService } from './prisma.service';
import NotFoundError from '../exceptions/not-found.error';

@Injectable()
export class RoleService {
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
      const role = await this.findById(roleId);

      if (!role) throw new NotFoundError('Role does not exists!');

      const permissionsExist = await this.prisma.roles.findMany({
        select: { id: permissions },
      });

      if (!permissionsExist)
        throw new NotFoundError('Permissions does not exists!');

      return await this.prisma.roles.update({
        where: { id: roleId },
        data: { permissions: permissions },
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
