import { Injectable } from '@nestjs/common';
import CustomError from '../exceptions/custom.error';
import ConflictError from '../exceptions/conflict.error';
import { PrismaService } from './prisma.service';

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService) {}

  async create({ name, description }) {
    try {
      const permissionAlreadyExists = await this.prisma.permissions.findFirst({
        where: { name: name },
      });

      if (permissionAlreadyExists)
        throw new ConflictError('Permission already exists!');

      return this.prisma.permissions.create({
        data: { name: name, description: description },
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }
}
