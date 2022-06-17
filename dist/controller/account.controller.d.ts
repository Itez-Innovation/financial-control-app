import AccountService from '../service/account.service';
import { CreateAccountDto } from 'src/dto/account/create-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(createAccountDto: CreateAccountDto): Promise<import("../entity/account.entity").Account>;
    delete(id: string): Promise<any>;
    update(id: string, updateData: {
        CPF?: string;
        Name?: string;
        password?: string;
    }): Promise<import("../entity/account.entity").Account>;
    read(id: string): Promise<import("../entity/account.entity").Account>;
    readAll(): Promise<import("../entity/account.entity").Account[]>;
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
    }): Promise<import("../entity/account.entity").Account>;
}
