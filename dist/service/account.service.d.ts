import IAccountRepository from '../repository/accountRepository/IAccountRepository';
import ITokenRepository from '../repository/tokenRepository/ITokenRepository';
import IPermissionRepository from '../repository/permissionRepository/IPermissionRepository';
import IRoleRepository from '../repository/roleRepository/IRoleRepository';
export declare class AccountService {
    private AccountRepository;
    private TokenRepository;
    private PermissionRepository;
    private RoleRepository;
    constructor(AccountRepository: IAccountRepository, TokenRepository: ITokenRepository, PermissionRepository: IPermissionRepository, RoleRepository: IRoleRepository);
    create({ CPF, Name, password }: {
        CPF: any;
        Name: any;
        password: any;
    }): Promise<import(".prisma/client").account>;
    delete({ id }: {
        id: any;
    }): Promise<any>;
    update({ id, CPF, Name, password }: {
        id: any;
        CPF: any;
        Name: any;
        password: any;
    }): Promise<import(".prisma/client").account>;
    read({ id }: {
        id: any;
    }): Promise<import(".prisma/client").account>;
    readAll(): Promise<import(".prisma/client").account[]>;
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
    }): Promise<import(".prisma/client").account>;
}
