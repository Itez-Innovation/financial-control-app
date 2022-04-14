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
var Account_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const cashInflow_1 = require("../model/cashInflow");
const cashOutflow_1 = require("../model/cashOutflow");
let Account = Account_1 = class Account {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], Account.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 14,
        unique: true
    }),
    __metadata("design:type", String)
], Account.prototype, "CPF", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Account.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => cashInflow_1.Input, accounts => Account_1),
    __metadata("design:type", cashInflow_1.Input)
], Account.prototype, "input", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => cashOutflow_1.Output, accounts => Account_1),
    __metadata("design:type", cashOutflow_1.Output)
], Account.prototype, "output", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], Account.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], Account.prototype, "updatedAt", void 0);
Account = Account_1 = __decorate([
    (0, typeorm_1.Entity)('account')
], Account);
exports.default = Account;
//# sourceMappingURL=Account.js.map