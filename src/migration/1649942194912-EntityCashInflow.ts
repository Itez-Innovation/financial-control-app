import {MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class EntityCashInflow1649942194912 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'")
        
        await queryRunner.createTable(
            new Table(
                {
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
                }
            )
        )

        await queryRunner.createForeignKey(
            "accounts",
            new TableForeignKey({
                columnNames: ["inputs"],
                referencedTableName: "cashInflow",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE"                
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("inputs")
    }

}
