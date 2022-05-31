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
exports.RefreshTokenEntity = void 0;
const typeorm_1 = require("typeorm");
const account_entity_1 = require("./account.entity");
let RefreshTokenEntity = class RefreshTokenEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RefreshTokenEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RefreshTokenEntity.prototype, "refToken", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RefreshTokenEntity.prototype, "account_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => account_entity_1.AccountEntity, (account) => account.refresh, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'account_id' }),
    __metadata("design:type", account_entity_1.AccountEntity)
], RefreshTokenEntity.prototype, "account", void 0);
RefreshTokenEntity = __decorate([
    (0, typeorm_1.Entity)('refreshToken')
], RefreshTokenEntity);
exports.RefreshTokenEntity = RefreshTokenEntity;
//# sourceMappingURL=refreshToken.entity.js.map