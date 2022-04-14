import {MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class EntityCashInflow1649942194912 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'")
        //criar cashInflow
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
    }

}
