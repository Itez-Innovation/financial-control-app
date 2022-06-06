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
exports.CashOutflowController = void 0;
const common_1 = require("@nestjs/common");
const cash_outflow_service_1 = require("../service/cash-outflow.service");
let CashOutflowController = class CashOutflowController {
    constructor(cashOutflowService) {
        this.cashOutflowService = cashOutflowService;
    }
    async create(createData) {
        const { Area, Titulo, Valor, account_id } = createData;
        return this.cashOutflowService.create({ Area, Titulo, Valor, account_id });
    }
    async delete(id) {
        return this.cashOutflowService.delete(id);
    }
    async update(id, updateData) {
        const { Area, Titulo, Valor } = updateData;
        return this.cashOutflowService.update({
            Area,
            Titulo,
            Valor,
            id,
        });
    }
    async read(id) {
        return this.cashOutflowService.read(id);
    }
    async readAll(request, res, next) {
        try {
            const response = await service.readAll();
            return res.status(201).json(response);
        }
        catch (error) {
            res.status(500).json({ code: 500, message: 'internal server error' });
        }
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CashOutflowController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CashOutflowController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CashOutflowController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('read/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CashOutflowController.prototype, "read", null);
CashOutflowController = __decorate([
    (0, common_1.Controller)('cash-outflow'),
    __metadata("design:paramtypes", [cash_outflow_service_1.CashOutflowService])
], CashOutflowController);
exports.CashOutflowController = CashOutflowController;
//# sourceMappingURL=cash-outflow.controller.js.map