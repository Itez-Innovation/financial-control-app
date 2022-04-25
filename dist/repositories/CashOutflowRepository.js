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
const CashOutflowEntity_1 = require("../entity/CashOutflowEntity");
let CashOutflowRepository = class CashOutflowRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(CashOutflowEntity_1.default);
    }
    async create(output) {
        await this.repository.save(output);
    }
    async get_all() {
        const outputs = await this.repository.find();
        return outputs;
    }
};
CashOutflowRepository = __decorate([
    (0, typeorm_1.EntityRepository)(CashOutflowEntity_1.default),
    __metadata("design:paramtypes", [])
], CashOutflowRepository);
exports.default = CashOutflowRepository;
//# sourceMappingURL=CashOutflowRepository.js.map