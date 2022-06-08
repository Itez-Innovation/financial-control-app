import { PrismaService } from '../../service/prisma.service';
import ITokenRepository from './ITokenRepository';
export default class TokenRepository implements ITokenRepository {
    private prisma;
    constructor(prisma: PrismaService);
    generateRefreshToken(account_id: string): Promise<any>;
    generateToken(account_id: string): Promise<any>;
    delete(id: string): Promise<any>;
    findById(id: string): any;
}
