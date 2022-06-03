import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
export declare class AccountService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ CPF, Name, password }: {
        CPF: any;
        Name: any;
        password: any;
    }): Promise<import(".prisma/client").account>;
    findByCpf(CPF: string): Promise<import(".prisma/client").account>;
    findById(Id: Prisma.accountWhereUniqueInput): Promise<import(".prisma/client").account>;
}
