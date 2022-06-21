import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { LoginValidationMiddleware } from './middlewares/login-validation.middleware';
import { AccountModule } from 'src/module/account.module';
import { IACCOUNT_REPOSITORY } from 'src/repository/accountRepository/IAccountRepository';
import AccountRepository from 'src/repository/accountRepository/AccountRepository';
import { PrismaService } from 'src/service/prisma.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    AccountModule,
    PassportModule,
    JwtModule.register({
      secret: `${process.env.JWT_SECRET_KEY}`,
      signOptions: { expiresIn: '1d' },
      secretOrPrivateKey: `${process.env.JWT_SECRET_KEY}`,
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    JwtService,
    PrismaService,
    { provide: IACCOUNT_REPOSITORY, useClass: AccountRepository },
  ],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}
