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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashOutflowService = void 0;
const common_1 = require("@nestjs/common");
const not_found_error_1 = __importDefault(require("../exceptions/not-found.error"));
const custom_error_1 = __importDefault(require("../exceptions/custom.error"));
const ICashOutflowRepository_1 = require("../repository/cashOutflowRepository/ICashOutflowRepository");
let CashOutflowService = class CashOutflowService {
    constructor(CashOutflowRepository) {
        this.CashOutflowRepository = CashOutflowRepository;
        this.SERVICE_NAME = 'CASHOUTFLOW_SERVICE';
    }
    async create({ Area, Titulo, Valor, account_id }) {
        try {
            return this.CashOutflowRepository.create({
                account_id,
                Area,
                Titulo,
                Valor,
            });
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error(`Internal server error`);
        }
    }
    async delete(id) {
        try {
            const outputFound = await this.CashOutflowRepository.findById(id);
            if (!outputFound)
                throw new not_found_error_1.default('Output not found');
            return this.CashOutflowRepository.delete(id);
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error(`Internal server error`);
        }
    }
    async update({ Area, Titulo, Valor, id }) {
        try {
            const outputFound = await this.CashOutflowRepository.findById(id);
            if (!outputFound)
                throw new not_found_error_1.default('Output not found');
            return this.CashOutflowRepository.update(id, Area, Titulo, Valor);
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error(`Internal server error`);
        }
    }
    async read(id) {
        try {
            const outputFound = await this.CashOutflowRepository.findById(id);
            if (!outputFound)
                throw new not_found_error_1.default('Output not found');
            return outputFound;
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error(`Internal server error`);
        }
    }
    async readAll() {
        try {
            const OutputsFound = await this.CashOutflowRepository.get_all();
            if (!OutputsFound)
                throw new not_found_error_1.default('Output not found');
            return OutputsFound;
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error(`Internal server error`);
        }
    }
};
CashOutflowService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(ICashOutflowRepository_1.ICASHOUTFLOW_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], CashOutflowService);
exports.CashOutflowService = CashOutflowService;
//# sourceMappingURL=cash-outflow.service.js.map