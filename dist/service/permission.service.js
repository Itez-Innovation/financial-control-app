"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const custom_error_1 = require("../exceptions/custom.error");
const conflict_error_1 = require("../exceptions/conflict.error");
const prisma_service_1 = require("./prisma.service");
let PermissionService = class PermissionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ name, description }) {
        try {
            const permissionAlreadyExists = await this.prisma.permissions.findFirst({
                where: { name: name },
            });
            if (permissionAlreadyExists)
                throw new conflict_error_1.default('Permission already exists!');
            return this.prisma.permissions.create({
                data: { name: name, description: description },
            });
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error('Internal server error');
        }
    }
};
PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PermissionService);
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map