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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashInflowService = void 0;
const common_1 = require("@nestjs/common");
const not_found_error_1 = __importDefault(require("../exceptions/not-found.error"));
const custom_error_1 = __importDefault(require("../exceptions/custom.error"));
const prisma_service_1 = require("./prisma.service");
let CashInflowService = class CashInflowService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ Titulo, Valor, account_id }) {
        try {
            return await this.prisma.cashInflow.create({
                data: { Titulo: Titulo, Valor: Valor, account_id: account_id },
            });
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error('Internal server error');
        }
    }
    async delete(id) {
        try {
            const inputFound = await this.prisma.cashInflow.findFirst({
                where: { id: id },
            });
            if (!inputFound)
                throw new not_found_error_1.default('Input not found');
            return this.prisma.cashInflow.delete({
                where: { id: id },
            });
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error('Internal server error');
        }
    }
    async update({ Titulo, Valor, id }) {
        try {
            const inputFound = await this.prisma.cashInflow.findFirst({
                where: { id: id },
            });
            if (!inputFound)
                throw new not_found_error_1.default('Input not found');
            return this.prisma.cashInflow.update({
                where: { id: id },
                data: { Titulo: Titulo, Valor: Valor },
            });
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error('Internal server error');
        }
    }
    async read(id) {
        try {
            const inputFound = await this.prisma.cashInflow.findFirst({
                where: { id: id },
            });
            if (!inputFound)
                throw new not_found_error_1.default('Input not found');
            return inputFound;
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error('Internal server error');
        }
    }
    async readAll() {
        try {
            const inputsFound = await this.prisma.cashInflow.findMany();
            if (!inputsFound)
                throw new not_found_error_1.default('Inputs not found');
            return inputsFound;
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error('Internal server error');
        }
    }
};
CashInflowService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CashInflowService);
exports.CashInflowService = CashInflowService;
//# sourceMappingURL=cash-inflow.service.js.map