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
const typeorm_1 = require("typeorm");
const account_entity_1 = require("./account.entity");
let CashOutflowEntity = class CashOutflowEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CashOutflowEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: false,
        nullable: false,
    }),
    __metadata("design:type", String)
], CashOutflowEntity.prototype, "Area", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CashOutflowEntity.prototype, "Titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'float4',
    }),
    __metadata("design:type", Number)
], CashOutflowEntity.prototype, "Valor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CashOutflowEntity.prototype, "account_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => account_entity_1.default, (account) => account.output, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'account_id' }),
    __metadata("design:type", account_entity_1.default)
], CashOutflowEntity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], CashOutflowEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], CashOutflowEntity.prototype, "updatedAt", void 0);
CashOutflowEntity = __decorate([
    (0, typeorm_1.Entity)('cashOutflow')
], CashOutflowEntity);
exports.default = CashOutflowEntity;
//# sourceMappingURL=cashOutflowEntity.js.map