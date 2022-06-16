import { Module } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
