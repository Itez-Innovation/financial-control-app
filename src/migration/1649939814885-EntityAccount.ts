// import { MigrationInterface, QueryRunner, Table } from "typeorm";

// export class EntityAccount1649939814885 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query("CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'")
        
//         await queryRunner.createTable(
//             new Table(
//                 {
//                     name: "accounts",
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
//                             name: "cpf",
//                             type: "varchar",
//                             length: "14",
//                             isUnique: true
//                         },
//                         {
//                             name: "name",
//                             type: "varchar"
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
//                         {
//                             name: "inputs",
//                             type: "uuid",
//                             isNullable: true
//                         },
//                         {
//                             name: "outputs",
//                             type: "uuid",
//                             isNullable: true
//                         }
//                     ]
//                 }
//             )
//         )
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable("accounts")
//         await queryRunner.dropTable("inputs")
//         await queryRunner.dropTable("outputs")
//     }

// }
