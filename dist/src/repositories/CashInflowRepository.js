"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const CashInflow_1 = require("../entity/CashInflow");
let CashInflowRepository = class CashInflowRepository extends typeorm_1.Repository {
    async findByTitulo(Titulo) {
        return this.find({
            where: {
                Titulo,
            }
        });
    }
    async findById(id) {
        return this.find({
            where: {
                id,
            }
        });
    }
};
CashInflowRepository = __decorate([
    (0, typeorm_1.EntityRepository)(CashInflow_1.default)
], CashInflowRepository);
exports.default = CashInflowRepository;
//# sourceMappingURL=CashInflowRepository.js.map