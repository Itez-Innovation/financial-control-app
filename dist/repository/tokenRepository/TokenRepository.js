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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
class TokenRepository {
    constructor(prisma) {
        this.prisma = prisma;
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
}
exports.default = TokenRepository;
//# sourceMappingURL=TokenRepository.js.map