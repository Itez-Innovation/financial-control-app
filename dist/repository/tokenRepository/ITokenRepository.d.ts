import { refreshToken } from '@prisma/client';
export declare const ITOKEN_REPOSITORY = "ITokenRepository";
export interface ITokenRepository {
    generateRefreshToken(account_id: string): Promise<refreshToken>;
    generateToken(account_id: string): Promise<string>;
    deleteToken(id: string): Promise<any>;
    findTokenById(id: string): Promise<refreshToken | undefined>;
}
