import {MigrationInterface, QueryRunner} from "typeorm";

export class CorrectingRefTok1652672177568 implements MigrationInterface {
    name = 'CorrectingRefTok1652672177568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "refreshToken" DROP CONSTRAINT "FK_8620c6b74ac492b2396ffd462ed"`);
        await queryRunner.query(`ALTER TABLE "refreshToken" ALTER COLUMN "account_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "refreshToken" ADD CONSTRAINT "FK_8620c6b74ac492b2396ffd462ed" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "refreshToken" DROP CONSTRAINT "FK_8620c6b74ac492b2396ffd462ed"`);
        await queryRunner.query(`ALTER TABLE "refreshToken" ALTER COLUMN "account_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "refreshToken" ADD CONSTRAINT "FK_8620c6b74ac492b2396ffd462ed" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
