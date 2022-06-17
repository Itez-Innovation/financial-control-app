import { Injectable } from '@nestjs/common';
import { account } from '@prisma/client';
import { hash } from 'bcryptjs';
import { Account } from 'src/entity/account.entity';
import { PrismaService } from '../../service/prisma.service';
import { IAccountRepository } from './IAccountRepository';

@Injectable()
export default class AccountRepository implements IAccountRepository {
  constructor(private prisma: PrismaService) {}

  async create(account: Account) {
    return this.prisma.account.create({
      data: account,
    });
  }

  async delete(id: string) {
    return this.prisma.account.delete({ where: { id: id } });
  }

  async update(id: string, CPF: string, Name?: string, password?: string) {
    const acc = await this.findById(id);

    acc.CPF = CPF ? CPF : acc.CPF;
    acc.Name = Name ? Name : acc.Name;
    acc.password = (await hash(password, 8)) ? password : acc.password;

    return this.prisma.account.update({
      where: { id: id },
      data: { CPF: acc.CPF, Name: acc.Name, password: acc.password },
    });
  }

  async get_all() {
    return this.prisma.account.findMany();
  }

  async getStats(id: string) {
    return this.prisma.account.findMany({
      include: { input: true, output: true },
      where: { id: id },
    });
  }

  async findByCpf(CPF: string): Promise<account> {
    return this.prisma.account.findFirst({
      where: { CPF },
    });
  }

  async findById(id: string): Promise<account> {
    return this.prisma.account.findFirst({
      where: { id },
    });
  }
}
