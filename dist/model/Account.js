"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CashInflow_1 = require("./CashInflow");
const CashOutflow_1 = require("./CashOutflow");
const financialStatsService_1 = require("../service/financialStatsService");
// npm install prompt-sync
const prompt = require("prompt-sync")();
let inpt = new CashInflow_1.Input();
let otpt = new CashOutflow_1.Output();
let fStat = new financialStatsService_1.financialStats();
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
    // Criando a conta
    createAccount(idAcc) {
        let acc = new Account();
        console.log("Olá!");
        acc.id = idAcc;
        let check = false;
        do {
            acc.Name = String(prompt(`Insira seu nome completo: `));
            if (acc.Name.trim()) {
                check = true;
            }
            else {
                console.log("Insira um nome válido!\n");
            }
        } while (!check);
        check = false;
        do {
            acc.CPF = String(prompt(`Insira seu CPF: `));
            if (acc.CPF.trim()) {
                check = true;
            }
            else {
                console.log("Insira um CPF válido!\n");
            }
        } while (!check);
        console.log("");
        acc.input = [];
        acc.output = [];
        return acc;
    }
    showDataAccount(accounts) {
        console.log("\nListando contas cadastradas: ");
        accounts.forEach(element => {
            console.log(`\nID da conta: ${element.id}`);
            console.log(`Nome: ${element.Name}`);
            console.log(`CPF: ${element.CPF}`);
        });
    }
    // Adicionando ganho
    addInput(acc, idInflow) {
        let inp = new CashInflow_1.Input();
        inp = inpt.adicionarGanho(idInflow);
        acc.input.push(inp);
    }
    // Editando ganho
    editInput(acc) {
        inpt.editarGanhos(acc.input);
    }
    // Listando ganhos
    listInput(acc) {
        inpt.listarGanhos(acc.input);
    }
    // Removendo ganho
    rmInput(acc) {
        inpt.removerGanhos(acc.input);
    }
    // Adicionando gasto
    addOutput(acc, idOutflow) {
        let out = new CashOutflow_1.Output();
        out = otpt.adicionarGasto(idOutflow);
        acc.output.push(out);
    }
    // Editando gasto
    editOutput(acc) {
        otpt.editarGastos(acc.output);
    }
    // Listando gastos
    listOutput(acc) {
        otpt.listarGastos(acc.output);
    }
    // Removendo gastos
    rmOutput(acc) {
        otpt.removerGastos(acc.output);
    }
    genStats(acc) {
        fStat.generateStats(acc.input, acc.output);
    }
}
exports.default = Account;
//# sourceMappingURL=Account.js.map