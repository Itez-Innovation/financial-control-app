"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorrigeInput1650860657010 = void 0;
class CorrigeInput1650860657010 {
    constructor() {
        this.name = 'CorrigeInput1650860657010';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
    }
}
exports.CorrigeInput1650860657010 = CorrigeInput1650860657010;
//# sourceMappingURL=1650860657010-CorrigeInput.js.map