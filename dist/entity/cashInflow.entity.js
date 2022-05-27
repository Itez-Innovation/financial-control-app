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
let CashInflowEntity = class CashInflowEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CashInflowEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CashInflowEntity.prototype, "Titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'float4',
    }),
    __metadata("design:type", Number)
], CashInflowEntity.prototype, "Valor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CashInflowEntity.prototype, "account_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => account_entity_1.default, (account) => account.input, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'account_id' }),
    __metadata("design:type", account_entity_1.default)
], CashInflowEntity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], CashInflowEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], CashInflowEntity.prototype, "updatedAt", void 0);
CashInflowEntity = __decorate([
    (0, typeorm_1.Entity)('cashInflow')
], CashInflowEntity);
exports.default = CashInflowEntity;
//# sourceMappingURL=cashInflow.entity.js.map