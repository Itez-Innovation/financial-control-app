import { PrismaService } from './prisma.service';
import { account } from '@prisma/client';
export declare class AccountService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ CPF, Name, password }: {
        CPF: any;
        Name: any;
        password: any;
    }): Promise<account>;
    delete({ id }: {
        id: any;
    }): Promise<account>;
    update({ id, CPF, Name, password }: {
        id: any;
        CPF: any;
        Name: any;
        password: any;
    }): Promise<account>;
    read({ id }: {
        id: any;
    }): Promise<account>;
    readAll(): Promise<account[]>;
    createACL({ userId, roles, permissions }: {
        userId: any;
        roles: any;
        permissions: any;
    }): Promise<account>;
    findByCpf(CPF: string): Promise<account>;
    findById(id: string): Promise<account>;
}
