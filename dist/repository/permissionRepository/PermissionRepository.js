"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PermissionRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(permission) {
        return this.repository.save(permission);
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
exports.default = PermissionRepository;
//# sourceMappingURL=PermissionRepository.js.map