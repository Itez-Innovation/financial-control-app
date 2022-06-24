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
    console.log(account.roles);
    console.log(account.permissions);
    return this.prisma.account.create({
      data: account,
    });
  }

  async delete(id: string) {
    return this.prisma.account.delete({ where: { id: id } });
  }

  async update(account: Account) {
    const acc: Account = await this.findById(account.id);

    acc.CPF = account.CPF ? account.CPF : acc.CPF;
    acc.Name = account.Name ? account.Name : acc.Name;
    acc.password = (await hash(account.password, 8))
      ? account.password
      : acc.password;

    return this.prisma.account.update({
      where: { id: account.id },
      data: acc,
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
