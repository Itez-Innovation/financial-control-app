import { IAccountRepository } from '../repository/accountRepository/IAccountRepository';
import { ITokenRepository } from '../repository/tokenRepository/ITokenRepository';
import { IPermissionRepository } from '../repository/permissionRepository/IPermissionRepository';
import IRoleRepository from '../repository/roleRepository/IRoleRepository';
import { CreateAccountDto } from 'src/dto/account/create-account.dto';
export default class AccountService {
    private AccountRepository;
    private TokenRepository;
    private PermissionRepository;
    private RoleRepository;
    SERVICE_NAME: string;
    constructor(AccountRepository: IAccountRepository, TokenRepository: ITokenRepository, PermissionRepository: IPermissionRepository, RoleRepository: IRoleRepository);
    create(createAccountDto: CreateAccountDto): Promise<import("../entity/account.entity").Account>;
    delete({ id }: {
        id: any;
    }): Promise<any>;
    update({ id, CPF, Name, password }: {
        id: any;
        CPF: any;
        Name: any;
        password: any;
    }): Promise<import("../entity/account.entity").Account>;
    read({ id }: {
        id: any;
    }): Promise<import("../entity/account.entity").Account>;
    readAll(): Promise<import("../entity/account.entity").Account[]>;
    getStats(id: string): Promise<any>;
    login({ CPF, password }: {
        CPF: any;
        password: any;
    }): Promise<{
        token: string;
        refreshToken: import(".prisma/client").refreshToken;
    }>;
    refresh(id: string): Promise<string>;
    createACL({ userId, roles, permissions }: {
        userId: any;
        roles: any;
        permissions: any;
    }): Promise<import("../entity/account.entity").Account>;
}
