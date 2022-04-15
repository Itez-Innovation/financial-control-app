"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importações
const Account_1 = require("./model/Account");
/*-----------------------------------------------------------------------------------------*/
// Declarações
let option = 0;
let idAcc = 1;
let idOutflow = 1;
let idInflow = 1;
// npm install prompt-sync
const prompt = require("prompt-sync")();
/*-----------------------------------------------------------------------------------------*/
// Função para imprimir uma linha do tamanho desejado
function printLine(tamanho = 40, tipo = 1) {
    if (tipo === 1) {
        for (let i = 1; i < tamanho; i++) {
            process.stdout.write("-");
        }
        console.log("-");
    }
    else {
        for (let i = 1; i < tamanho; i++) {
            process.stdout.write("=");
        }
        console.log("=");
    }
}
function printMenuAccount() {
    console.log("-----------------CONTAS-----------------");
    console.log("1 - CADASTRO");
    console.log("2 - VER DADOS CADASTRADOS");
    console.log("3 - ACESSAR FUNCIONALIDADES");
    option = Number(prompt("Opção escolhida: "));
}
// Função para imprimir o menu e pegar a opção escolhida
function printMenu() {
    console.log("------------------MENU------------------");
    console.log("1 - ADICIONAR GASTO");
    console.log("2 - REMOVER GASTO");
    console.log("3 - LISTAR GASTOS");
    console.log("4 - EDITAR GASTO");
    console.log("5 - ADICIONAR GANHO");
    console.log("6 - REMOVER GANHO");
    console.log("7 - LISTAR GANHOS");
    console.log("8 - EDITAR GANHO");
    console.log("9 - GERAR EXTRATO");
    console.log("10 - ENCERRAR");
    option = Number(prompt("Opção escolhida: "));
}
/*-----------------------------------------------------------------------------------------*/
// Começo do programa
printLine(40, 2);
let accounts = [];
let acc = new Account_1.Account;
do {
    printMenuAccount();
    switch (option) {
        case 1:
            console.log("\n~~~~~~~~~~ADICIONAR CONTA~~~~~~~~~~\n");
            accounts.push(acc.createAccount(idAcc));
            idAcc++;
            break;
        case 2:
            if (accounts.length === 0) {
                console.log(`\nPor favor, crie uma conta primeiro!`);
            }
            else {
                printLine(40, 1);
                acc.showDataAccount(accounts);
                printLine(40, 1);
            }
            break;
        case 3:
            if (accounts.length === 0) {
                console.log(`\nPor favor, crie uma conta primeiro!`);
                option = 0;
            }
            break;
        default:
            console.log("\nOpção incorreta! Siga o menu!");
            break;
    }
} while (option != 3);
printLine(40, 2);
option = 0;
do {
    printMenu();
    printLine(40, 1);
    switch (option) {
        case 1:
            console.log("~~~~~~~~~~ADICIONAR GASTO~~~~~~~~~~\n");
            acc.addOutput(accounts[0], idOutflow);
            idOutflow++;
            break;
        case 2:
            console.log("~~~~~~~~~~REMOVER GASTO~~~~~~~~~~\n");
            acc.rmOutput(accounts[0]);
            break;
        case 3:
            console.log("~~~~~~~~~~LISTAR GASTOS~~~~~~~~~~\n");
            acc.listOutput(accounts[0]);
            break;
        case 4:
            console.log("~~~~~~~~~~EDITAR GASTOS~~~~~~~~~~\n");
            acc.editOutput(accounts[0]);
            break;
        case 5:
            console.log("~~~~~~~~~~ADICIONAR GANHO~~~~~~~~~~\n");
            acc.addInput(accounts[0], idInflow);
            idInflow++;
            break;
        case 6:
            console.log("~~~~~~~~~~REMOVER GANHO~~~~~~~~~~\n");
            acc.rmInput(accounts[0]);
            break;
        case 7:
            console.log("~~~~~~~~~~LISTAR GANHOS~~~~~~~~~~\n");
            acc.listInput(accounts[0]);
            break;
        case 8:
            console.log("~~~~~~~~~~EDITAR GANHO~~~~~~~~~~\n");
            acc.editInput(accounts[0]);
            break;
        case 9:
            console.log("~~~~~~~~~~GERAR EXTRATO~~~~~~~~~~\n");
            acc.genStats(accounts[0]);
            break;
        case 10:
            console.log("OBRIGADO POR UTILIZAR O PROGRAMA!\n");
            break;
        default:
            console.log("OPÇÃO INCORRETA! SIGA O MENU E DIGITE NOVAMENTE!\n");
            break;
    }
    printLine(40, 2);
} while (option != 10);
//# sourceMappingURL=main.js.map