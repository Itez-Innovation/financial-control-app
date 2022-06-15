"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionModule = void 0;
const common_1 = require("@nestjs/common");
const PermissionRepository_1 = __importDefault(require("../repository/permissionRepository/PermissionRepository"));
const prisma_service_1 = require("../service/prisma.service");
const permission_controller_1 = require("../controller/permission.controller");
const permission_service_1 = require("../service/permission.service");
let PermissionModule = class PermissionModule {
};
PermissionModule = __decorate([
    (0, common_1.Module)({
        controllers: [permission_controller_1.PermissionController],
        providers: [permission_service_1.PermissionService, prisma_service_1.PrismaService],
        imports: [PermissionRepository_1.default],
    })
], PermissionModule);
exports.PermissionModule = PermissionModule;
//# sourceMappingURL=permission.module.js.map