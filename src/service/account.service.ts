import { Inject, Injectable } from '@nestjs/common';
import ConflictError from '../exceptions/conflict.exception';
import NotFoundError from '../exceptions/not-found.exception';
import UnauthorizedError from '../exceptions/unauthorized.exception';
import ForbiddenError from '../exceptions/forbidden.exception';
import CustomError from '../exceptions/custom.error';
import { compare, hash } from 'bcryptjs';
import dayjs from 'dayjs';
import * as jwt from 'jsonwebtoken';
import {
  IAccountRepository,
  IACCOUNT_REPOSITORY,
} from '../repository/accountRepository/IAccountRepository';
import {
  ITokenRepository,
  ITOKEN_REPOSITORY,
} from '../repository/tokenRepository/ITokenRepository';
import {
  IPermissionRepository,
  IPERMISSION_REPOSITORY,
} from '../repository/permissionRepository/IPermissionRepository';
import IRoleRepository, {
  IROLE_REPOSITORY,
} from '../repository/roleRepository/IRoleRepository';
import { CreateAccountDto } from 'src/dto/account/create-account.dto';

@Injectable()
export default class AccountService {
  SERVICE_NAME = 'ACCOUNT_SERVICE';

  constructor(
    @Inject(IACCOUNT_REPOSITORY)
    private AccountRepository: IAccountRepository,
    @Inject(ITOKEN_REPOSITORY)
    private TokenRepository: ITokenRepository,
    @Inject(IPERMISSION_REPOSITORY)
    private PermissionRepository: IPermissionRepository,
    @Inject(IROLE_REPOSITORY)
    private RoleRepository: IRoleRepository,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    try {
      const accountAlreadyExists = await this.AccountRepository.findByCpf(
        createAccountDto.CPF,
      );

      if (accountAlreadyExists)
        throw new ConflictError(
          `This account ${createAccountDto.CPF} already exists`,
        );

      createAccountDto.password = await hash(createAccountDto.password, 8);

      return this.AccountRepository.create(createAccountDto);
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

      const token = await this.TokenRepository.generateToken(acc.id);

      const refreshToken = await this.TokenRepository.generateRefreshToken(
        acc.id,
      );

      return { token, refreshToken };
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }

  async refresh(id: string) {
    const refToken = await this.TokenRepository.findTokenById(id);

    if (!refToken) throw new UnauthorizedError("Refresh Token isn't valid");

    const { exp, sub } = jwt.decode(refToken.refToken, { json: true });

    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(exp));

    if (refreshTokenExpired) {
      await this.TokenRepository.deleteToken(refToken.id);
      throw new ForbiddenError('Refresh Token Expired!');
    }

    return this.TokenRepository.generateToken(sub);
  }

  async createACL({ userId, roles, permissions }) {
    try {
      const user = await this.AccountRepository.findById(userId);

      if (!user) throw new NotFoundError("Couldn't find this account");

      const permExists = await this.PermissionRepository.findByIds(permissions);
      const rolesExists = await this.RoleRepository.findByIds(roles);

      this.AccountRepository.create(user);

      return user;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }
}
