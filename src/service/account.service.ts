import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}
}
