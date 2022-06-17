import { Inject, Injectable } from '@nestjs/common';
import CustomError from '../exceptions/custom.error';
import ConflictError from '../exceptions/conflict.exception';
import {
  IPermissionRepository,
  IPERMISSION_REPOSITORY,
} from 'src/repository/permissionRepository/IPermissionRepository';

@Injectable()
export class PermissionService {
  SERVICE_NAME = 'PERMISSION_SERVICE';

  constructor(
    @Inject(IPERMISSION_REPOSITORY)
    private PermissionRepository: IPermissionRepository,
  ) {}

  async create({ name, description }) {
    try {
      const permissionAlreadyExists =
        await this.PermissionRepository.findByName(name);

      if (permissionAlreadyExists)
        throw new ConflictError('Permission already exists!');

      return this.PermissionRepository.create({ name, description });
    } catch (error) {
      if (error instanceof CustomError) throw error;
      else throw new Error('Internal server error');
    }
  }
}
