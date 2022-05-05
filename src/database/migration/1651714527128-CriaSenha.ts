import {MigrationInterface, QueryRunner} from "typeorm";

export class CriaSenha1651714527128 implements MigrationInterface {
    name = 'CriaSenha1651714527128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cashInflow" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "Titulo" character varying NOT NULL, "Valor" real NOT NULL, "account_id" uuid NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8894b9f4b6082827652c19e6beb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cashOutflow" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "Area" character varying NOT NULL, "Titulo" character varying NOT NULL, "Valor" real NOT NULL, "account_id" uuid NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cb274ed3b5e6555d6d658281a20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "password" character varying NOT NULL, "CPF" character varying(14) NOT NULL, "Name" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ac3a3fee2ee8cfcf3c1d59450fe" UNIQUE ("CPF"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cashInflow" ADD CONSTRAINT "FK_4dbfa565333ab05aa0be140f89f" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cashOutflow" ADD CONSTRAINT "FK_84efc17f01e049fe3ee6132d2f8" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`ALTER TABLE "cashOutflow" DROP CONSTRAINT "FK_84efc17f01e049fe3ee6132d2f8"`);
        await queryRunner.query(`ALTER TABLE "cashInflow" DROP CONSTRAINT "FK_4dbfa565333ab05aa0be140f89f"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "cashOutflow"`);
        await queryRunner.query(`DROP TABLE "cashInflow"`);
    }

}
