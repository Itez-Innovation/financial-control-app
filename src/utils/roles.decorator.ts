import { SetMetadata } from '@nestjs/common';
import { ERoles } from 'src/enum/roles.enum';

export const Roles = (...roles: ERoles[]) => SetMetadata('roles', roles);
