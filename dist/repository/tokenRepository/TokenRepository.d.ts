import { PrismaService } from '../../service/prisma.service';
import { ITokenRepository } from './ITokenRepository';
export default class TokenRepository implements ITokenRepository {
    private prisma;
    constructor(prisma: PrismaService);
    generateRefreshToken(account_id: string): Promise<import(".prisma/client").refreshToken>;
    generateToken(account_id: string): Promise<string>;
    deleteToken(id: string): Promise<import(".prisma/client").refreshToken>;
    findTokenById(id: string): Promise<import(".prisma/client").refreshToken>;
}
