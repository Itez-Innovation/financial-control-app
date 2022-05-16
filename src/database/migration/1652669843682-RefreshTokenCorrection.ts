import {MigrationInterface, QueryRunner} from "typeorm";

export class RefreshTokenCorrection1652669843682 implements MigrationInterface {
    name = 'RefreshTokenCorrection1652669843682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "refreshToken" DROP COLUMN "expiresIn"`);
        await queryRunner.query(`ALTER TABLE "refreshToken" ADD "refToken" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "refreshToken" DROP CONSTRAINT "FK_8620c6b74ac492b2396ffd462ed"`);
        await queryRunner.query(`ALTER TABLE "refreshToken" ALTER COLUMN "account_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "refreshToken" ADD CONSTRAINT "FK_8620c6b74ac492b2396ffd462ed" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "refreshToken" DROP CONSTRAINT "FK_8620c6b74ac492b2396ffd462ed"`);
        await queryRunner.query(`ALTER TABLE "refreshToken" ALTER COLUMN "account_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "refreshToken" ADD CONSTRAINT "FK_8620c6b74ac492b2396ffd462ed" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "refreshToken" DROP COLUMN "refToken"`);
        await queryRunner.query(`ALTER TABLE "refreshToken" ADD "expiresIn" integer NOT NULL`);
    }

}
