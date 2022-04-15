"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const CashOutflowEntity_1 = require("../entity/CashOutflowEntity");
let CashOutflowRepository = class CashOutflowRepository extends typeorm_1.Repository {
    async findByTitulo(Titulo) {
        return this.find({
            where: {
                Titulo,
            }
        });
    }
    async findByArea(Area) {
        return this.find({
            where: {
                Area,
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
    async findByValor(Valor) {
        return this.find({
            where: {
                Valor,
            }
        });
    }
};
CashOutflowRepository = __decorate([
    (0, typeorm_1.EntityRepository)(CashOutflowEntity_1.default)
], CashOutflowRepository);
exports.default = CashOutflowRepository;
//# sourceMappingURL=CashOutflowRepository.js.map