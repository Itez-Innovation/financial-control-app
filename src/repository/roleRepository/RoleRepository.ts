import { Injectable } from '@nestjs/common';
import { roles } from '@prisma/client';
import { PrismaService } from '../../service/prisma.service';
import IRoleRepository from './IRoleRepository';

@Injectable()
export default class RoleRepository implements IRoleRepository {
  constructor(private prisma: PrismaService) {}

  async create(role: roles) {
    return this.prisma.roles.create({
      data: role,
    });
  }

  findByName(name: string) {
    return this.prisma.roles.findFirst({
      where: { name: name },
    });
  }

  findById(id: string) {
    return this.prisma.roles.findFirst({
      where: { id: id },
    });
  }

  findByIds(ids: string[]) {
    return this.prisma.roles.findMany({
      where: { id: { in: ids } },
    });
  }
}
