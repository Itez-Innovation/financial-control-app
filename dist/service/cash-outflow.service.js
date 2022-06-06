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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashOutflowService = void 0;
const common_1 = require("@nestjs/common");
let CashOutflowService = class CashOutflowService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        try {
            const newOutput = new Output(dto);
            return this.repository.create(newOutput);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async delete(id) {
        try {
            const outputFound = await this.repository.findByID(id);
            if (!outputFound)
                throw new Error('Output not found');
            return this.repository.delete(id);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(dto, id) {
        try {
            const { Area, Titulo, Valor } = dto;
            const outputFound = await this.repository.findByID(id);
            if (!outputFound)
                throw new Error('Output not found');
            return this.repository.update(id, Area, Titulo, Valor);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async read(id) {
        try {
            const outputFound = await this.repository.findByID(id);
            if (!outputFound)
                throw new Error('Output not found');
            return this.repository.findByID(id);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async readAll() {
        try {
            const OutputsFound = await this.repository.get_all();
            if (!OutputsFound)
                throw new Error('Outputs not found');
            return this.repository.get_all();
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
CashOutflowService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof PrismaService !== "undefined" && PrismaService) === "function" ? _a : Object])
], CashOutflowService);
exports.CashOutflowService = CashOutflowService;
//# sourceMappingURL=cash-outflow.service.js.map