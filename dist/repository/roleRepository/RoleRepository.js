"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoleRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(role) {
        return this.prisma.roles.create({
            data: role,
        });
    }
    findByName(name) {
        return this.prisma.roles.findFirst({
            where: { name: name },
        });
    }
    findById(id) {
        return this.prisma.roles.findFirst({
            where: { id: id },
        });
    }
    findByIds(ids) {
        return this.prisma.roles.findMany({
            where: { id: { in: ids } },
        });
    }
}
exports.default = RoleRepository;
//# sourceMappingURL=RoleRepository.js.map