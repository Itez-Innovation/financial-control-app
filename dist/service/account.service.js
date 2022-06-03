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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const conflict_error_1 = require("../exceptions/conflict.error");
const not_found_error_1 = require("../exceptions/not-found.error");
const custom_error_1 = require("../exceptions/custom.error");
let AccountService = class AccountService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ CPF, Name, password }) {
        try {
            const accountAlreadyExists = await this.findByCpf(CPF);
            if (accountAlreadyExists)
                throw new conflict_error_1.default(`This account ${CPF} already exists`);
            return this.prisma.account.create({
                data: { CPF, Name, password },
            });
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error(`Internal server error`);
        }
    }
    async delete({ id }) {
        try {
            const accountFound = await this.findById(id);
            if (!accountFound)
                throw new not_found_error_1.default(`Account ${id}`);
            return this.prisma.account.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error('Internal server error');
        }
    }
    async update({ id, CPF, Name, password }) {
        try {
            const accountFound = await this.findById(id);
            if (!accountFound)
                throw new not_found_error_1.default(`Account ${id}`);
            return this.prisma.account.update({
                data: { CPF, Name, password },
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
    async read({ id }) {
        try {
            const accountFound = await this.findById(id);
            if (!accountFound)
                throw new not_found_error_1.default(`Account ${id}`);
            return this.prisma.account.findUnique({
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
    async readAll() {
        try {
            const accountsFound = await this.prisma.account.findMany();
            if (!accountsFound)
                throw new not_found_error_1.default(`No accounts were found`);
            return accountsFound;
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error('Internal server error');
        }
    }
    async findByCpf(CPF) {
        return this.prisma.account.findFirst({
            where: { CPF },
        });
    }
    async findById(id) {
        return this.prisma.account.findFirst({
            where: { id },
        });
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map