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
            this._id = id;
            this._nome = nome;
            this._cpf = cpf;
            this._input = [input];
            this._output = [output];
        }
        else {
            this._id = 0;
            this._nome = "";
            this._cpf = "";
            this._input = [];
            this._output = [];
        }
    }
    // Criando a conta
    createAccount(idAcc) {
        let acc = new account();
        console.log("Olá!");
        acc._id = idAcc;
        let check = false;
        do {
            acc._nome = String(prompt(`Insira seu nome completo: `));
            if (acc._nome.trim()) {
                check = true;
            }
            else {
                console.log("Insira um nome válido!\n");
            }
        } while (!check);
        check = false;
        do {
            acc._cpf = String(prompt(`Insira seu CPF: `));
            if (acc._cpf.trim()) {
                check = true;
            }
            else {
                console.log("Insira um CPF válido!\n");
            }
        } while (!check);
        console.log("");
        acc._input = [];
        acc._output = [];
        return acc;
    }
    showDataAccount(accounts) {
        console.log("\nListando contas cadastradas: ");
        accounts.forEach(element => {
            console.log(`\nID da conta: ${element._id}`);
            console.log(`Nome: ${element._nome}`);
            console.log(`CPF: ${element._cpf}`);
        });
    }
    // Adicionando ganho
    addInput(acc, idInflow) {
        let inp = new cashInflow_1.Input();
        inp = inpt.adicionarGanho(idInflow);
        acc._input.push(inp);
    }
    // Editando ganho
    editInput(acc) {
        inpt.editarGanhos(acc._input);
    }
    // Listando ganhos
    listInput(acc) {
        inpt.listarGanhos(acc._input);
    }
    // Removendo ganho
    rmInput(acc) {
        inpt.removerGanhos(acc._input);
    }
    // Adicionando gasto
    addOutput(acc, idOutflow) {
        let out = new cashOutflow_1.Output();
        out = otpt.adicionarGasto(idOutflow);
        acc._output.push(out);
    }
    // Editando gasto
    editOutput(acc) {
        otpt.editarGastos(acc._output);
    }
    // Listando gastos
    listOutput(acc) {
        otpt.listarGastos(acc._output);
    }
    // Removendo gastos
    rmOutput(acc) {
        otpt.removerGastos(acc._output);
    }
    genStats(acc) {
        fStat.generateStats(acc._input, acc._output);
    }
}
exports.account = account;
