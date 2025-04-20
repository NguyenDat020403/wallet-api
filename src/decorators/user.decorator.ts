import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (field: 'sub' | 'email', ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const user = request.user;
    return field ? user?.[field] : user;
  },
);
