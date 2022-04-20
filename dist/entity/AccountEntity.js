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
const CashInflowEntity_1 = require("./CashInflowEntity");
const CashOutflowEntity_1 = require("./CashOutflowEntity");
let AccountEntity = class AccountEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AccountEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 14,
        unique: true
    }),
    __metadata("design:type", String)
], AccountEntity.prototype, "CPF", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => CashInflowEntity_1.default, input => input.account),
    __metadata("design:type", Array)
], AccountEntity.prototype, "inputs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => CashOutflowEntity_1.default, output => output.account),
    __metadata("design:type", Array)
], AccountEntity.prototype, "outputs", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], AccountEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], AccountEntity.prototype, "updatedAt", void 0);
AccountEntity = __decorate([
    (0, typeorm_1.Entity)('account')
], AccountEntity);
exports.default = AccountEntity;
//# sourceMappingURL=AccountEntity.js.map