import RoleRepository from "../repositories/RoleRepository";


export class RoleService {

    constructor (
        private readonly repository = new RoleRepository()
    ) {}
    
}