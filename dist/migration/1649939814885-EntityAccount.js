"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityAccount1649939814885 = void 0;
const typeorm_1 = require("typeorm");
class EntityAccount1649939814885 {
    async up(queryRunner) {
        await queryRunner.query("CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'");
        await queryRunner.createTable(new typeorm_1.Table({
            name: "accounts",
            columns: [
                {
                    name: "id",
                    generationStrategy: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    isUnique: true,
                    isGenerated: true,
                    default: "uuid_generate_v4()"
                },
                {
                    name: "cpf",
                    type: "varchar",
                    length: "14",
                    isUnique: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updatedAt",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "inputs",
                    type: "uuid",
                    isNullable: true
                },
                {
                    name: "outputs",
                    type: "uuid",
                    isNullable: true
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("accounts");
        await queryRunner.dropTable("inputs");
        await queryRunner.dropTable("outputs");
    }
}
exports.EntityAccount1649939814885 = EntityAccount1649939814885;
//# sourceMappingURL=1649939814885-EntityAccount.js.map