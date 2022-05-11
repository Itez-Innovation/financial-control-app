import {MigrationInterface, QueryRunner} from "typeorm";

export class CorrigeEntities1652292915609 implements MigrationInterface {
    name = 'CorrigeEntities1652292915609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_permissions" DROP CONSTRAINT "FK_b09b9a210c60f41ec7b453758e9"`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" DROP CONSTRAINT "FK_3309f5fa8d95935f0701027f2bd"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP CONSTRAINT "PK_920331560282b8bd21bb02290df"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" DROP CONSTRAINT "PK_838ed6e68b01d6912fa682bedef"`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" ADD CONSTRAINT "PK_e08f6859eaac8cbf7f087f64e2b" PRIMARY KEY ("role_id")`);
        await queryRunner.query(`DROP INDEX "IDX_3309f5fa8d95935f0701027f2b"`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" DROP COLUMN "permission_id"`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" ADD "permission_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" DROP CONSTRAINT "PK_e08f6859eaac8cbf7f087f64e2b"`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" ADD CONSTRAINT "PK_838ed6e68b01d6912fa682bedef" PRIMARY KEY ("role_id", "permission_id")`);
        await queryRunner.query(`ALTER TABLE "users_permissions" DROP CONSTRAINT "PK_7f3736984cd8546a1e418005561"`);
        await queryRunner.query(`ALTER TABLE "users_permissions" ADD CONSTRAINT "PK_4de7d0b175f702be3be55270023" PRIMARY KEY ("user_id")`);
        await queryRunner.query(`DROP INDEX "IDX_b09b9a210c60f41ec7b453758e"`);
        await queryRunner.query(`ALTER TABLE "users_permissions" DROP COLUMN "permission_id"`);
        await queryRunner.query(`ALTER TABLE "users_permissions" ADD "permission_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_permissions" DROP CONSTRAINT "PK_4de7d0b175f702be3be55270023"`);
        await queryRunner.query(`ALTER TABLE "users_permissions" ADD CONSTRAINT "PK_7f3736984cd8546a1e418005561" PRIMARY KEY ("user_id", "permission_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_3309f5fa8d95935f0701027f2b" ON "permissions_roles" ("permission_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_b09b9a210c60f41ec7b453758e" ON "users_permissions" ("permission_id") `);
        await queryRunner.query(`ALTER TABLE "permissions_roles" ADD CONSTRAINT "FK_3309f5fa8d95935f0701027f2bd" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_b09b9a210c60f41ec7b453758e9" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_permissions" DROP CONSTRAINT "FK_b09b9a210c60f41ec7b453758e9"`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" DROP CONSTRAINT "FK_3309f5fa8d95935f0701027f2bd"`);
        await queryRunner.query(`DROP INDEX "IDX_b09b9a210c60f41ec7b453758e"`);
        await queryRunner.query(`DROP INDEX "IDX_3309f5fa8d95935f0701027f2b"`);
        await queryRunner.query(`ALTER TABLE "users_permissions" DROP CONSTRAINT "PK_7f3736984cd8546a1e418005561"`);
        await queryRunner.query(`ALTER TABLE "users_permissions" ADD CONSTRAINT "PK_4de7d0b175f702be3be55270023" PRIMARY KEY ("user_id")`);
        await queryRunner.query(`ALTER TABLE "users_permissions" DROP COLUMN "permission_id"`);
        await queryRunner.query(`ALTER TABLE "users_permissions" ADD "permission_id" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_b09b9a210c60f41ec7b453758e" ON "users_permissions" ("permission_id") `);
        await queryRunner.query(`ALTER TABLE "users_permissions" DROP CONSTRAINT "PK_4de7d0b175f702be3be55270023"`);
        await queryRunner.query(`ALTER TABLE "users_permissions" ADD CONSTRAINT "PK_7f3736984cd8546a1e418005561" PRIMARY KEY ("user_id", "permission_id")`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" DROP CONSTRAINT "PK_838ed6e68b01d6912fa682bedef"`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" ADD CONSTRAINT "PK_e08f6859eaac8cbf7f087f64e2b" PRIMARY KEY ("role_id")`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" DROP COLUMN "permission_id"`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" ADD "permission_id" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_3309f5fa8d95935f0701027f2b" ON "permissions_roles" ("permission_id") `);
        await queryRunner.query(`ALTER TABLE "permissions_roles" DROP CONSTRAINT "PK_e08f6859eaac8cbf7f087f64e2b"`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" ADD CONSTRAINT "PK_838ed6e68b01d6912fa682bedef" PRIMARY KEY ("permission_id", "role_id")`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP CONSTRAINT "PK_920331560282b8bd21bb02290df"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" ADD CONSTRAINT "FK_3309f5fa8d95935f0701027f2bd" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_b09b9a210c60f41ec7b453758e9" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
