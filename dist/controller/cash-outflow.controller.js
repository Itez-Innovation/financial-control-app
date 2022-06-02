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
exports.CashOutflowController = void 0;
const common_1 = require("@nestjs/common");
const cash_outflow_service_1 = require("../service/cash-outflow.service");
let CashOutflowController = class CashOutflowController {
    constructor(cashOutflowService) {
        this.cashOutflowService = cashOutflowService;
    }
};
CashOutflowController = __decorate([
    (0, common_1.Controller)('cash-outflow'),
    __metadata("design:paramtypes", [cash_outflow_service_1.CashOutflowService])
], CashOutflowController);
exports.CashOutflowController = CashOutflowController;
//# sourceMappingURL=cash-outflow.controller.js.map