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
const AccountEntity_1 = require("./AccountEntity");
let CashOutflow = class CashOutflow {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CashOutflow.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: false,
        nullable: false,
    }),
    __metadata("design:type", String)
], CashOutflow.prototype, "Area", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CashOutflow.prototype, "Titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'float4'
    }),
    __metadata("design:type", Number)
], CashOutflow.prototype, "Valor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CashOutflow.prototype, "account_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => AccountEntity_1.default, account => account.outputs, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "account_id" }),
    __metadata("design:type", AccountEntity_1.default)
], CashOutflow.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], CashOutflow.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], CashOutflow.prototype, "updatedAt", void 0);
CashOutflow = __decorate([
    (0, typeorm_1.Entity)('cashOutflow')
], CashOutflow);
exports.default = CashOutflow;
//# sourceMappingURL=CashOutflowEntity.js.map