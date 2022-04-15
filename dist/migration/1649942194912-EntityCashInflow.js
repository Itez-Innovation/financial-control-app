"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityCashInflow1649942194912 = void 0;
const typeorm_1 = require("typeorm");
class EntityCashInflow1649942194912 {
    async up(queryRunner) {
        await queryRunner.query("CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'");
        await queryRunner.createTable(new typeorm_1.Table({
            name: "inputs",
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
                    name: "titulo",
                    type: "varchar",
                    default: "Recebido",
                },
                {
                    name: "valor",
                    type: "float(4)",
                    isNullable: false,
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
            ]
        }));
        await queryRunner.createForeignKey("accounts", new typeorm_1.TableForeignKey({
            columnNames: ["inputs"],
            referencedTableName: "cashInflow",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("inputs");
    }
}
exports.EntityCashInflow1649942194912 = EntityCashInflow1649942194912;
//# sourceMappingURL=1649942194912-EntityCashInflow.js.map