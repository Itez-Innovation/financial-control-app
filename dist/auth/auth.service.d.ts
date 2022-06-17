import { JwtService } from '@nestjs/jwt';
import { Account } from 'src/entity/account.entity';
import { IAccountRepository } from 'src/repository/accountRepository/IAccountRepository';
import { AccountToken } from './models/AccountToken';
export declare class AuthService {
    private readonly jwtService;
    private readonly accountRepository;
    constructor(jwtService: JwtService, accountRepository: IAccountRepository);
    login(account: Account): Promise<AccountToken>;
    validateAccount(CPF: string, password: string): Promise<Account>;
}
