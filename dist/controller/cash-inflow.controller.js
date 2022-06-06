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
    async delete(request, res, next) {
        try {
            const { id } = request.body;
            await service.delete(id);
            return res.status(204).json();
        }
        catch (error) {
            res.status(500).json({ code: 500, message: 'internal server error' });
        }
    }
    async update(request, res, next) {
        try {
            const { Titulo, Valor, id } = request.body;
            const response = await service.update({ Titulo, Valor }, id);
            return res.status(201).json(response);
        }
        catch (error) {
            res.status(500).json({ code: 500, message: 'internal server error' });
        }
    }
    async read(request, res, next) {
        try {
            const { id } = request.body;
            const response = await service.read(id);
            return res.status(201).json(response);
        }
        catch (error) {
            res.status(500).json({ code: 500, message: 'internal server error' });
        }
    }
    async readAll(request, res, next) {
        try {
            return res.status(201).json(await service.readAll());
        }
        catch (error) {
            res.status(500).json({ code: 500, message: 'internal server error' });
        }
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
CashInflowController = __decorate([
    (0, common_1.Controller)('cash-inflow'),
    __metadata("design:paramtypes", [cash_inflow_service_1.CashInflowService])
], CashInflowController);
exports.CashInflowController = CashInflowController;
//# sourceMappingURL=cash-inflow.controller.js.map