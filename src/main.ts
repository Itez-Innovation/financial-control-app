// Importações
import { account } from "./model/account"

/*-----------------------------------------------------------------------------------------*/

// Declarações
let option = 0
let acc: account = new account()
let idAcc: number = 1
let idOutflow: number = 1
let idInflow: number = 1

// npm install prompt-sync
const prompt = require("prompt-sync")()

/*-----------------------------------------------------------------------------------------*/

// Função para imprimir uma linha do tamanho desejado
function printLine(tamanho = 40, tipo = 1){
    if(tipo === 1){
        for(let i = 1; i < tamanho; i++){
            process.stdout.write("-");
        }
        console.log("-")
    } else {
        for(let i = 1; i < tamanho; i++){
            process.stdout.write("=");
        }
        console.log("=")
    }
}

// function printMenuAccount() {
//     console.log("------------------CONTAS------------------")
//     console.log("1 - CADASTRO")
//     console.log("2 - VER DADOS CADASTRADOS")
//     console.log("3 - ACESSAR FUNCIONALIDADES")

//     option = Number(prompt("Opção escolhida: "))
// }

// Função para imprimir o menu e pegar a opção escolhida
function printMenu() {
    console.log("------------------MENU------------------")
    console.log("1 - ADICIONAR GASTO")
    console.log("2 - REMOVER GASTO")
    console.log("3 - LISTAR GASTOS")
    console.log("4 - EDITAR GASTO")
    console.log("5 - ADICIONAR GANHO")
    console.log("6 - REMOVER GANHO")
    console.log("7 - LISTAR GANHOS")
    console.log("8 - EDITAR GANHO")
    console.log("9 - GERAR EXTRATO")
    console.log("10 - ENCERRAR")

    option = Number(prompt("Opção escolhida: "))
}

/*-----------------------------------------------------------------------------------------*/

// Começo do programa
printLine(40,2)

console.log("~~~~~~~~~~ADICIONAR CONTA~~~~~~~~~~\n")
acc = account.createAccount(idAcc)
idAcc++

// printLine(40, 1)
// account.showDataAccount(acc)
// printLine(40, 1)

printLine(40,2)

do{
    printMenu()
    printLine(40, 1)
    switch (option) {
        case 1:
            console.log("~~~~~~~~~~ADICIONAR GASTO~~~~~~~~~~\n")
            account.addOutput(acc, idOutflow)
            idOutflow++
            break;
        case 2:
            console.log("~~~~~~~~~~REMOVER GASTO~~~~~~~~~~\n")
            account.rmOutput(acc)
            break;
        case 3:
            console.log("~~~~~~~~~~LISTAR GASTOS~~~~~~~~~~\n")
            account.listOutput(acc)
            break;
        case 4:
            console.log("~~~~~~~~~~EDITAR GASTOS~~~~~~~~~~\n")
            account.editOutput(acc)
            break;
        case 5:
            console.log("~~~~~~~~~~ADICIONAR GANHO~~~~~~~~~~\n")
            account.addInput(acc, idInflow)
            idInflow++
            break;
        case 6:
            console.log("~~~~~~~~~~REMOVER GANHO~~~~~~~~~~\n")
            account.rmInput(acc)
            break;
        case 7:
            console.log("~~~~~~~~~~LISTAR GANHOS~~~~~~~~~~\n")
            account.listInput(acc)
            break;
        case 8:
            console.log("~~~~~~~~~~EDITAR GANHO~~~~~~~~~~\n")
            account.editInput(acc)
            break;
        case 9:
            console.log("~~~~~~~~~~GERAR EXTRATO~~~~~~~~~~\n")
            account.genStats(acc)
            break;
        case 10:
            console.log("OBRIGADO POR UTILIZAR O PROGRAMA!\n")
            break;
        default:
            console.log("OPÇÃO INCORRETA! SIGA O MENU E DIGITE NOVAMENTE!\n")
            break;
    }
    printLine(40, 2)
} while (option != 10)