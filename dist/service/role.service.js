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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const custom_error_1 = __importDefault(require("../exceptions/custom.error"));
const conflict_error_1 = __importDefault(require("../exceptions/conflict.error"));
const prisma_service_1 = require("./prisma.service");
const not_found_error_1 = __importDefault(require("../exceptions/not-found.error"));
let RoleService = class RoleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ name, description }) {
        try {
            if (await this.findByName(name))
                throw new conflict_error_1.default(`This role already exists`);
            return this.prisma.roles.create({
                data: { name, description },
            });
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error(`Internal server error`);
        }
    }
    async createRolePermission({ roleId, permissions }) {
        try {
            const role = await this.findById(roleId);
            if (!role)
                throw new not_found_error_1.default('Role does not exists!');
            const { permissoes } = permissions;
            const permissionsExist = await this.prisma.permissions.findMany({
                where: {
                    id: {
                        in: permissoes,
                    },
                },
            });
            if (!permissionsExist)
                throw new not_found_error_1.default('Permissions does not exists!');
            return await this.prisma.roles.update({
                where: { id: roleId },
                data: { permissions: permissoes },
            });
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error('Internal server error');
        }
    }
    async findByName(name) {
        return this.prisma.roles.findFirst({
            where: { name: name },
        });
    }
    async findById(id) {
        return this.prisma.roles.findFirst({
            where: { id: id },
        });
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map