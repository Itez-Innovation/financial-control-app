import { Injectable } from '@nestjs/common';
import ConflictError from '../exceptions/conflict.error';
import NotFoundError from '../exceptions/not-found.error';
import UnauthorizedError from '../exceptions/unauthorized.error';
import ForbiddenError from '../exceptions/forbidden.error';
import CustomError from '../exceptions/custom.error';
import { compare } from 'bcryptjs';
import dayjs from 'dayjs';
import * as jwt from 'jsonwebtoken';
import IAccountRepository from '../repository/accountRepository/IAccountRepository';

@Injectable()
export class AccountService {
  constructor(private AccountRepository: IAccountRepository) {}

  async create({ CPF, Name, password }) {
    try {
      const accountAlreadyExists = await this.AccountRepository.findByCpf(CPF);

      if (accountAlreadyExists)
        throw new ConflictError(`This account ${CPF} already exists`);

      return this.AccountRepository.create({ CPF, Name, password });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error(`Internal server error`);
    }
  }

  async delete({ id }) {
    try {
      const accountFound = await this.AccountRepository.findById(id);

      if (!accountFound) throw new NotFoundError(`Account ${id}`);

      return this.AccountRepository.delete(id);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async update({ id, CPF, Name, password }) {
    try {
      const accountFound = await this.AccountRepository.findById(id);

      if (!accountFound) throw new NotFoundError(`Account ${id}`);

      return this.AccountRepository.update(CPF, Name, password);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async read({ id }) {
    try {
      const accountFound = await this.AccountRepository.findById(id);

      if (!accountFound) throw new NotFoundError(`Account ${id}`);

      return this.AccountRepository.findById(id);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async readAll() {
    try {
      const accountsFound = await this.AccountRepository.get_all();

      if (!accountsFound) throw new NotFoundError(`No accounts were found`);

      return accountsFound;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async getStats(id: string) {
    try {
      const statsFound = await this.AccountRepository.getStats(id);

      if (!statsFound) throw new NotFoundError("Couldn't find Financial Stats");

      return statsFound;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async login({ CPF, password }) {
    try {
      const cpfMatch = await this.AccountRepository.findByCpf(CPF);

      if (!cpfMatch) throw new NotFoundError(`CPF or Password doesn't match`);

      const passMatch = compare(
        password,
        (await this.AccountRepository.findByCpf(CPF)).password,
      );

      if (!passMatch) throw new NotFoundError(`CPF or Password doesn't match`);

      const acc = await this.AccountRepository.findByCpf(CPF);

      const token = await this.generateToken(acc.id);

      const refreshToken = await this.generateRefreshToken(acc.id);

      return { token, refreshToken };
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async refresh(id: string) {
    const refToken = await this.findTokenById(id);

    if (!refToken) throw new UnauthorizedError("Refresh Token isn't valid");

    const { exp, sub } = jwt.decode(refToken.refToken, { json: true });

    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(exp));

    if (refreshTokenExpired) {
      await this.deleteToken(refToken.id);
      throw new ForbiddenError('Refresh Token Expired!');
    }

    return this.generateToken(sub);
  }

  async createACL({ userId, roles, permissions }) {
    try {
      const user = await this.AccountRepository.findById(userId);

      if (!user) throw new NotFoundError("Couldn't find this account");

      const permissionsExists = await this.prisma.permissions.findMany({
        select: { id: permissions },
      });
      const rolesExists = await this.prisma.permissions.findMany({
        select: { id: permissions },
      });

      this.AccountRepository.create(user);

      return user;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  // Token Repository

  async generateRefreshToken(account_id: string) {
    const refToken = jwt.sign({ userId: account_id }, process.env.SECRET, {
      expiresIn: '1h',
      subject: account_id,
    });

    return this.prisma.refreshToken.create({
      data: { refToken: refToken, account_id: account_id },
    });
  }

  async generateToken(account_id: string) {
    return jwt.sign({ userId: account_id }, process.env.SECRET, {
      expiresIn: '10m',
      subject: account_id,
    });
  }

  async deleteToken(id: string) {
    return this.prisma.refreshToken.delete({
      where: { id: id },
    });
  }

  async findTokenById(id: string) {
    return this.prisma.refreshToken.findUnique({
      where: { id: id },
    });
  }
}
