import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from '../../service/prisma.service';
import ITokenRepository from './ITokenRepository';

@Injectable()
export default class TokenRepository implements ITokenRepository {
  constructor(private prisma: PrismaService) {}

  async generateRefreshToken(account_id: string) {
    const refToken = jwt.sign({ userId: account_id }, process.env.SECRET, {
      expiresIn: '1h',
      subject: account_id,
    });

    return this.prisma.refreshToken.create({
      data: { refToken: refToken, account_id: account_id },
    });
  }

  async generateToken(account_id: string) {
    return jwt.sign({ userId: account_id }, process.env.SECRET, {
      expiresIn: '10m',
      subject: account_id,
    });
  }

  async deleteToken(id: string) {
    return this.prisma.refreshToken.delete({
      where: { id: id },
    });
  }

  async findTokenById(id: string) {
    return this.prisma.refreshToken.findUnique({
      where: { id: id },
    });
  }
}
