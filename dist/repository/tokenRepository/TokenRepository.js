"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TokenRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateRefreshToken(account_id) {
        const refToken = jwt.sign({ userId: account_id }, process.env.SECRET, {
            expiresIn: '1h',
            subject: account_id,
        });
        const refreshToken = new RefreshToken({ refToken, account_id });
        const result = await this.repository.save(refreshToken);
        return result;
    }
    async generateToken(account_id) {
        return jwt.sign({ userId: account_id }, process.env.SECRET, {
            expiresIn: '10m',
            subject: account_id,
        });
    }
    async delete(id) {
        return this.repository.delete({ id });
    }
    findById(id) {
        return this.repository.findOne(id);
    }
}
exports.default = TokenRepository;
//# sourceMappingURL=TokenRepository.js.map