"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const conflict_error_1 = __importDefault(require("../exceptions/conflict.error"));
const not_found_error_1 = __importDefault(require("../exceptions/not-found.error"));
const unauthorized_error_1 = __importDefault(require("../exceptions/unauthorized.error"));
const forbidden_error_1 = __importDefault(require("../exceptions/forbidden.error"));
const custom_error_1 = __importDefault(require("../exceptions/custom.error"));
const bcryptjs_1 = require("bcryptjs");
const dayjs_1 = __importDefault(require("dayjs"));
const jwt = __importStar(require("jsonwebtoken"));
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
    async login({ CPF, password }) {
        try {
            const cpfMatch = await this.findByCpf(CPF);
            if (!cpfMatch)
                throw new not_found_error_1.default(`CPF or Password doesn't match`);
            const passMatch = (0, bcryptjs_1.compare)(password, (await this.findByCpf(CPF)).password);
            if (!passMatch)
                throw new not_found_error_1.default(`CPF or Password doesn't match`);
            const acc = await this.findByCpf(CPF);
            const token = await this.generateToken(acc.id);
            const refreshToken = await this.generateRefreshToken(acc.id);
            return { token, refreshToken };
        }
        catch (error) {
            if (error instanceof custom_error_1.default)
                throw error;
            else
                throw new Error('Internal server error');
        }
    }
    async refresh(id) {
        const refToken = await this.findTokenById(id);
        if (!refToken)
            throw new unauthorized_error_1.default("Refresh Token isn't valid");
        const { exp, sub } = jwt.decode(refToken.refToken, { json: true });
        const refreshTokenExpired = (0, dayjs_1.default)().isAfter(dayjs_1.default.unix(exp));
        if (refreshTokenExpired) {
            await this.deleteToken(refToken.id);
            throw new forbidden_error_1.default('Refresh Token Expired!');
        }
        return this.generateToken(sub);
    }
    async createACL({ userId, roles, permissions }) {
        try {
            const user = await this.findById(userId);
            if (!user)
                throw new not_found_error_1.default("Couldn't find this account");
            this.prisma.account.update({
                where: { id: userId },
                data: { roles: roles, permissions: permissions },
            });
            return user;
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
    async generateRefreshToken(account_id) {
        const refToken = jwt.sign({ userId: account_id }, process.env.SECRET, {
            expiresIn: '1h',
            subject: account_id,
        });
        return this.prisma.refreshToken.create({
            data: { refToken: refToken, account_id: account_id },
        });
    }
    async generateToken(account_id) {
        return jwt.sign({ userId: account_id }, process.env.SECRET, {
            expiresIn: '10m',
            subject: account_id,
        });
    }
    async deleteToken(id) {
        return this.prisma.refreshToken.delete({
            where: { id: id },
        });
    }
    async findTokenById(id) {
        return this.prisma.refreshToken.findUnique({
            where: { id: id },
        });
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map