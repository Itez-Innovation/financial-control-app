"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const CashInflowEntity_1 = require("../entity/CashInflowEntity");
let CashInflowRepository = class CashInflowRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(CashInflowEntity_1.default);
    }
    async create(input) {
        await this.repository.save(input);
    }
    async get_all() {
        const inputs = await this.repository.find();
        return inputs;
    }
};
CashInflowRepository = __decorate([
    (0, typeorm_1.EntityRepository)(CashInflowEntity_1.default),
    __metadata("design:paramtypes", [])
], CashInflowRepository);
exports.default = CashInflowRepository;
//# sourceMappingURL=CashInflowRepository.js.map