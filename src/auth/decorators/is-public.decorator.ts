import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Account => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
