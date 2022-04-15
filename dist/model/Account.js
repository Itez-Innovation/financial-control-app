"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account = void 0;
const cashInflow_1 = require("./cashInflow");
const cashOutflow_1 = require("./cashOutflow");
const financialStatsService_1 = require("../service/financialStatsService");
// npm install prompt-sync
const prompt = require("prompt-sync")();
let inpt = new cashInflow_1.Input();
let otpt = new cashOutflow_1.Output();
let fStat = new financialStatsService_1.financialStats();
class account {
    constructor(id, nome, cpf, input, output) {
        if (id && nome && cpf && input && output) {
            this.id = id;
            this.nome = nome;
            this.cpf = cpf;
            this.input = [input];
            this.output = [output];
        }
        else {
            this.id = 0;
            this.nome = "";
            this.cpf = "";
            this.input = [];
            this.output = [];
        }
    }
    // Criando a conta
    createAccount(idAcc) {
        let acc = new account();
        console.log("Olá!");
        acc.id = idAcc;
        let check = false;
        do {
            acc.nome = String(prompt(`Insira seu nome completo: `));
            if (acc.nome.trim()) {
                check = true;
            }
            else {
                console.log("Insira um nome válido!\n");
            }
        } while (!check);
        check = false;
        do {
            acc.cpf = String(prompt(`Insira seu CPF: `));
            if (acc.cpf.trim()) {
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
            console.log(`Nome: ${element.nome}`);
            console.log(`CPF: ${element.cpf}`);
        });
    }
    // Adicionando ganho
    addInput(acc, idInflow) {
        let inp = new cashInflow_1.Input();
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
        let out = new cashOutflow_1.Output();
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
exports.account = account;
//# sourceMappingURL=Account.js.map