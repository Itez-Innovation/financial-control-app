"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityCashOutflow1649988311464 = void 0;
const typeorm_1 = require("typeorm");
class EntityCashOutflow1649988311464 {
    async up(queryRunner) {
        await queryRunner.query("CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'");
        await queryRunner.createTable(new typeorm_1.Table({
            name: "outputs",
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
                    name: "area",
                    type: "varchar",
                    isUnique: false,
                    isNullable: false,
                    default: "Educação",
                },
                {
                    name: "titulo",
                    type: "varchar",
                    default: "Gasto",
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
            columnNames: ["outputs"],
            referencedTableName: "cashOutflow",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("outputs");
    }
}
exports.EntityCashOutflow1649988311464 = EntityCashOutflow1649988311464;
//# sourceMappingURL=1649988311464-EntityCashOutflow.js.map