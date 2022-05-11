import PermissionRepository from "../repositories/PermissionRepository";

export class PermissionService {

    constructor (
        private readonly repository = new PermissionRepository()
    ) {}
}