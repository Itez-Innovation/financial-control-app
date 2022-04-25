"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorrigeOutput1650860903767 = void 0;
class CorrigeOutput1650860903767 {
    constructor() {
        this.name = 'CorrigeOutput1650860903767';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
    }
}
exports.CorrigeOutput1650860903767 = CorrigeOutput1650860903767;
//# sourceMappingURL=1650860903767-CorrigeOutput.js.map