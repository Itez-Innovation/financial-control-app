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
const AccountEntity_1 = require("../entity/AccountEntity");
let AccountRepository = class AccountRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(AccountEntity_1.default);
    }
    // public async findByName(Name: string): Promise<AccountEntity[]> {
    //     return this.find({
    //         where: {
    //             Name,
    //         }
    //     })
    // }
    async create(account) {
        return this.repository.save(account);
    }
    async delete(id) {
        if (!await this.repository.findOne({ id })) {
            return new Error("This account doesn't exists!");
        }
        await this.repository.delete(id);
    }
    async update(id, CPF, Name) {
        if (!await this.repository.findOne({ id })) {
            return new Error("This account doesn't exists!");
        }
        const acc = await this.repository.findOne({ id });
        acc.CPF = CPF ? CPF : acc.CPF;
        acc.Name = Name ? Name : acc.Name;
        await this.repository.save(acc);
        return acc;
    }
    async get_all() {
        const accounts = await this.repository.find();
        console.log(accounts);
        return accounts;
    }
};
AccountRepository = __decorate([
    (0, typeorm_1.EntityRepository)(AccountEntity_1.default),
    __metadata("design:paramtypes", [])
], AccountRepository);
exports.default = AccountRepository;
//# sourceMappingURL=AccountRepository.js.map