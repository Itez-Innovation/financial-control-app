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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("../service/account.service");
const bcryptjs_1 = require("bcryptjs");
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    async create(createData) {
        const { CPF, Name, password } = createData;
        const passHash = await (0, bcryptjs_1.hash)(password, 10);
        return this.accountService.create({
            CPF,
            Name,
            password: passHash,
        });
    }
    async delete(id) {
        return this.accountService.delete({ id: id });
    }
    async update(id, updateData) {
        const { CPF, Name, password } = updateData;
        const passHash = await (0, bcryptjs_1.hash)(password, 8);
        return this.accountService.update({
            id,
            CPF,
            Name,
            password: passHash,
        });
    }
    async read(id) {
        return this.accountService.read({ id });
    }
    async readAll() {
        return this.accountService.readAll();
    }
    async login(dataLogin) {
        const { CPF, password } = dataLogin;
        return this.accountService.login({ CPF, password });
    }
    async refresh(id) {
        const refresh = await this.accountService.refresh(id);
        return JSON.stringify(refresh);
    }
    async createAcl(userId, aclData) {
        const { roles, permissions } = aclData;
        return this.accountService.createACL({
            userId,
            roles,
            permissions,
        });
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('read/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "read", null);
__decorate([
    (0, common_1.Get)('readAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "readAll", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('admin/acl'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "createAcl", null);
AccountController = __decorate([
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map