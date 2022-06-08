"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoleRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(role) {
        return this.repository.save(role);
    }
    findByName(name) {
        return this.repository.findOne({ name });
    }
    findById(id) {
        return this.repository.findOne({ id });
    }
    findByIds(ids) {
        return this.repository.findByIds(ids);
    }
}
exports.default = RoleRepository;
//# sourceMappingURL=RoleRepository.js.map