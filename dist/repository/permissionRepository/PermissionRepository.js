"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PermissionRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(permission) {
        return this.prisma.permissions.create({
            data: permission,
        });
    }
    findByName(name) {
        return this.prisma.permissions.findFirst({
            where: { name: name },
        });
    }
    findById(id) {
        return this.prisma.permissions.findFirst({
            where: { id: id },
        });
    }
    findByIds(ids) {
        return this.prisma.permissions.findMany({
            where: { id: { in: ids } },
        });
    }
}
exports.default = PermissionRepository;
//# sourceMappingURL=PermissionRepository.js.map