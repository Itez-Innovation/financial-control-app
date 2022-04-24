"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { financialStats } from '../service/financialStatsService'
// npm install prompt-sync
// const prompt = require("prompt-sync")()
// let inpt = new Input()
// let otpt = new Output()
// let fStat = new financialStats()
class Account {
    constructor(id, nome, cpf, input, output) {
        if (id && nome && cpf && input && output) {
            this.Name = nome;
            this.CPF = cpf;
            this.input = [input];
            this.output = [output];
        }
        else {
            this.CPF = "6846884";
            this.Name = "Zé";
            this.input = [];
            this.output = [];
        }
    }
}
exports.default = Account;
//# sourceMappingURL=Account.js.map