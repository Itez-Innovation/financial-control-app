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
exports.CashInflowService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let CashInflowService = class CashInflowService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        try {
            const newInput = new Input(dto);
            return this.repository.create(newInput);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async delete(id) {
        try {
            const inputFound = await this.repository.findByID(id);
            if (!inputFound)
                throw new Error('Input not found');
            return this.repository.delete(id);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(dto, id) {
        try {
            const { Titulo, Valor } = dto;
            const inputFound = await this.repository.findByID(id);
            if (!inputFound)
                throw new Error('Input not found');
            return this.repository.update(id, Titulo, Valor);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async read(id) {
        try {
            const inputFound = await this.repository.findByID(id);
            if (!inputFound)
                throw new Error('Input not found');
            return this.repository.findByID(id);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async readAll() {
        try {
            const inputsFound = await this.repository.get_all();
            if (!inputsFound)
                throw new Error('Inputs not found');
            return this.repository.get_all();
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
CashInflowService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CashInflowService);
exports.CashInflowService = CashInflowService;
//# sourceMappingURL=cash-inflow.service.js.map