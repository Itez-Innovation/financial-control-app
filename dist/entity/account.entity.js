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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const refreshToken_entity_1 = require("./refreshToken.entity");
const cashInflow_entity_1 = require("./cashInflow.entity");
const cashOutflowEntity_1 = require("./cashOutflowEntity");
const permission_entity_1 = require("./permission.entity");
const role_entity_1 = require("./role.entity");
let AccountEntity = class AccountEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AccountEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 14,
        unique: true,
    }),
    __metadata("design:type", String)
], AccountEntity.prototype, "CPF", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => cashInflow_entity_1.default, (input) => input.account),
    __metadata("design:type", Array)
], AccountEntity.prototype, "input", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => cashOutflowEntity_1.default, (output) => output.account),
    __metadata("design:type", Array)
], AccountEntity.prototype, "output", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => refreshToken_entity_1.default, (refresh) => refresh.account),
    __metadata("design:type", typeof (_a = typeof refreshToken_entity_1.default !== "undefined" && refreshToken_entity_1.default) === "function" ? _a : Object)
], AccountEntity.prototype, "refresh", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], AccountEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], AccountEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.default),
    (0, typeorm_1.JoinTable)({
        name: 'users_roles',
        joinColumns: [{ name: 'user_id' }],
        inverseJoinColumns: [{ name: 'role_id' }],
    }),
    __metadata("design:type", Array)
], AccountEntity.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => permission_entity_1.default),
    (0, typeorm_1.JoinTable)({
        name: 'users_permissions',
        joinColumns: [{ name: 'user_id' }],
        inverseJoinColumns: [{ name: 'permission_id' }],
    }),
    __metadata("design:type", Array)
], AccountEntity.prototype, "permissions", void 0);
AccountEntity = __decorate([
    (0, typeorm_1.Entity)('account')
], AccountEntity);
exports.default = AccountEntity;
//# sourceMappingURL=account.entity.js.map