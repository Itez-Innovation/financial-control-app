import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import ConflictError from '../exceptions/conflict.error';
import NotFoundError from '../exceptions/not-found.error';
import UnauthorizedError from '../exceptions/unauthorized.error';
import ForbiddenError from '../exceptions/forbidden.error';
import CustomError from '../exceptions/custom.error';
import { CreateAccountDto } from '../dto/account/create-account.dto';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async create({ CPF, Name, password }) {
    try {
      const accountAlreadyExists = await this.findByCpf(CPF);

      if (accountAlreadyExists)
        throw new ConflictError(`This account ${CPF} already exists`);

      return this.prisma.account.create({
        data: { CPF, Name, password },
      });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  // async delete(id: string) {
  //   try {
  //     const accountFound = await this.repository.findById(id);

  //     if (!accountFound) throw new NotFoundError(`Account ${id}`);

  //     return this.repository.delete(id);
  //   } catch (error) {
  //     if (error instanceof CustomError) throw error;
  //     else throw new Error('Internal server error');
  //   }
  // }

  // async update(CPF, Name, password, id) {
  //   try {
  //     const accountFound = await this.repository.findById(id);

  //     if (!accountFound) throw new NotFoundError(`Account ${id}`);

  //     return this.repository.update(id, CPF, Name, password);
  //   } catch (error) {
  //     if (error instanceof CustomError) throw error;
  //     else throw new Error('Internal server error');
  //   }
  // }

  // async read(id: string) {
  //   try {
  //     const accountFound = await this.repository.findById(id);

  //     if (!accountFound) throw new NotFoundError(`Account ${id}`);

  //     return accountFound;
  //   } catch (error) {
  //     if (error instanceof CustomError) throw error;
  //     else throw new Error('Internal server error');
  //   }
  // }

  // async readAll() {
  //   try {
  //     const accountsFound = await this.repository.get_all();

  //     if (!accountsFound) throw new NotFoundError(`No accounts were found`);

  //     return accountsFound;
  //   } catch (error) {
  //     if (error instanceof CustomError) throw error;
  //     else throw new Error('Internal server error');
  //   }
  // }

  // async getStats(id: string) {
  //   try {
  //     const statsFound = await this.repository.getStats(id);

  //     if (!statsFound) throw new NotFoundError("Couldn't find Financial Stats");

  //     return statsFound;
  //   } catch (error) {
  //     if (error instanceof CustomError) throw error;
  //     else throw new Error('Internal server error');
  //   }
  // }

  // async login(CPF: string, password: string) {
  //   try {
  //     let cpfMatch = await this.repository.findByCpf(CPF);
  //     if (!cpfMatch) throw new NotFoundError(`CPF or Password doesn't match`);

  //     let passMatch = await compare(
  //       password,
  //       (
  //         await this.repository.findByCpf(CPF)
  //       ).password,
  //     );
  //     if (!passMatch) throw new NotFoundError(`CPF or Password doesn't match`);

  //     const acc = await this.repository.findByCpf(CPF);

  //     const token = await this.repoToken.generateToken(acc.id);

  //     const refreshToken = await this.repoToken.generateRefreshToken(acc.id);

  //     return { token, refreshToken };
  //   } catch (error) {
  //     if (error instanceof CustomError) throw error;
  //     else throw new Error('Internal server error');
  //   }
  // }

  // async refresh(refreshToken: string) {
  //   let refToken = await this.repoToken.findById(refreshToken);

  //   if (!refToken) throw new UnauthorizedError("Refresh Token isn't valid");

  //   const { exp, sub } = jwt.decode(refToken.refToken, { json: true });

  //   const refreshTokenExpired = dayjs().isAfter(dayjs.unix(exp));

  //   if (refreshTokenExpired) {
  //     await this.repoToken.delete(refToken.id);
  //     throw new ForbiddenError('Refresh Token Expired!');
  //   }

  //   return this.repoToken.generateToken(sub);
  // }

  // async createACL(dto: CreateAclDto) {
  //   try {
  //     const { userId, roles, permissions } = dto;

  //     const user = await this.repository.findById(userId);

  //     if (!user) throw new NotFoundError("Couldn't find this account");

  //     const permissionsExists = await this.permissionRepo.findByIds(
  //       permissions,
  //     );
  //     const rolesExists = await this.roleRepo.findByIds(roles);

  //     user.permissions = permissionsExists;
  //     user.roles = rolesExists;

  //     this.repository.create(user);

  //     return user;
  //   } catch (error) {
  //     if (error instanceof CustomError) throw error;
  //     else throw new Error('Internal server error');
  //   }
  // }

  async findByCpf(CPF: string) {
    return this.prisma.account.findFirst({
      where: { CPF },
    });
  }

  async findById(Id: Prisma.accountWhereUniqueInput) {
    return this.prisma.account.findFirst({
      where: Id,
    });
  }
}
