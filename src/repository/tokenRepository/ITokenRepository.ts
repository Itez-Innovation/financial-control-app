import { refreshToken } from '@prisma/client';

export default interface ITokenRepository {
  generateRefreshToken(account_id: string): Promise<refreshToken>;
  generateToken(account_id: string): Promise<string>;
  deleteToken(id: string): Promise<any>;
  findTokenById(id: string): Promise<refreshToken | undefined>;
}
