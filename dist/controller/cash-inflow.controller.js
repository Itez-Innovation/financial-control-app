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
exports.CashInflowController = void 0;
const common_1 = require("@nestjs/common");
const cash_inflow_service_1 = require("../service/cash-inflow.service");
let CashInflowController = class CashInflowController {
    constructor(cashInflowService) {
        this.cashInflowService = cashInflowService;
    }
    async create(account_id, createData) {
        const { Titulo, Valor } = createData;
        return this.cashInflowService.create({
            Titulo,
            Valor,
            account_id,
        });
    }
    async delete(id) {
        return this.cashInflowService.delete(id);
    }
    async update(id, updateData) {
        const { Titulo, Valor } = updateData;
        return this.cashInflowService.update({
            Titulo,
            Valor,
            id,
        });
    }
    async read(id) {
        return this.cashInflowService.read(id);
    }
    async readAll() {
        return this.cashInflowService.readAll();
    }
};
__decorate([
    (0, common_1.Post)('create/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CashInflowController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CashInflowController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CashInflowController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('read/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CashInflowController.prototype, "read", null);
__decorate([
    (0, common_1.Get)('admin/readAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CashInflowController.prototype, "readAll", null);
CashInflowController = __decorate([
    (0, common_1.Controller)('cash-inflow'),
    __metadata("design:paramtypes", [cash_inflow_service_1.CashInflowService])
], CashInflowController);
exports.CashInflowController = CashInflowController;
//# sourceMappingURL=cash-inflow.controller.js.map