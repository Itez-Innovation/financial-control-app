import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Account } from 'src/entity/account.entity';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Account => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.account;
  },
);
