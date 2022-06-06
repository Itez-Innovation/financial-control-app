import { AccountService } from '../service/account.service';
import { account as AccountModel } from '@prisma/client';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(createData: {
        CPF: string;
        Name: string;
        password: string;
    }): Promise<AccountModel>;
    delete(id: string): Promise<AccountModel>;
    update(id: string, updateData: {
        CPF?: string;
        Name?: string;
        password?: string;
    }): Promise<AccountModel>;
    read(id: string): Promise<AccountModel>;
    readAll(): Promise<AccountModel[]>;
    login(dataLogin: {
        CPF: any;
        password: any;
    }): Promise<{
        token: string;
        refreshToken: import(".prisma/client").refreshToken;
    }>;
    refresh(id: string): Promise<string>;
    createAcl(userId: string, aclData: {
        roles: string[];
        permissions: string[];
    }): Promise<AccountModel>;
}
