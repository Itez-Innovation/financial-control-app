import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Account } from 'src/entity/account.entity';
import {
  IAccountRepository,
  IACCOUNT_REPOSITORY,
} from 'src/repository/accountRepository/IAccountRepository';
import UnauthorizedError from '../exceptions/unauthorized.exception';
import { AccountPayload } from './models/AccountPayload';
import { AccountToken } from './models/AccountToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(IACCOUNT_REPOSITORY)
    private readonly accountRepository: IAccountRepository,
  ) {}

  async login(account: Account): Promise<AccountToken> {
    const payload: AccountPayload = {
      sub: account.id,
      CPF: account.CPF,
      Name: account.Name,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateAccount(CPF: string, password: string): Promise<Account> {
    const account = await this.accountRepository.findByCpf(CPF);

    if (account) {
      const isPasswordValid = await bcrypt.compare(password, account.password);

      if (isPasswordValid) {
        return {
          ...account,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}
