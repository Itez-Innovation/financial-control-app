// import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"
// export class EntityCashOutflow1649988311464 implements MigrationInterface {
//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query("CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'")
//         await queryRunner.createTable(
//             new Table(
//                 {
//                     name: "outputs",
//                     columns: [
//                         {
//                             name: "id",
//                             generationStrategy: 'uuid',
//                             type: 'uuid',
//                             isPrimary: true,
//                             isUnique: true,
//                             isGenerated: true,
//                             default: "uuid_generate_v4()"
//                         },
//                         {
//                             name: "area",
//                             type: "varchar",
//                             isUnique: false,
//                             isNullable: false,
//                             default: "Educação", 
//                         },
//                         {
//                             name: "titulo",
//                             type: "varchar",
//                             default: "Gasto",
//                         },
//                         {
//                             name: "valor",
//                             type: "float(4)",
//                             isNullable: false,
//                         },
//                         {
//                             name: "createdAt",
//                             type: "timestamp",
//                             default: "now()"
//                         },
//                         {
//                             name: "updatedAt",
//                             type: "timestamp",
//                             default: "now()"
//                         },
//                     ]
//                 }
//             )
//         )
//         await queryRunner.createForeignKey(
//             "accounts",
//             new TableForeignKey({
//                 columnNames: ["outputs"],
//                 referencedTableName: "cashOutflow",
//                 referencedColumnNames: ["id"],
//                 onDelete: "CASCADE"                
//             })
//         )
//     }
//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable("outputs")
//     }
// }
//# sourceMappingURL=1649988311464-EntityCashOutflow.js.map