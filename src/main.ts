// Importações
import { Input } from './model/cashInflow'
import { Output, setores } from './model/cashOutflow'
import { financialStats } from './control/financialStats'
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

// Inserindo valores iniciais apenas para teste
// function insereInicial(){
//     let output: Output
//     let input: Input

//     output = new Output(idOutflow, setores.education, "Escola0", 150.99)
//     outflow.push(output)
//     idOutflow++
//     output = new Output(idOutflow, setores.education, "Escola1", 40.33)
//     outflow.push(output)
//     idOutflow++

//     output = new Output(idOutflow, setores.groceries, "Comida0", 23.99)
//     outflow.push(output)
//     idOutflow++
//     output = new Output(idOutflow, setores.groceries, "Comida1", 25)
//     outflow.push(output)
//     idOutflow++

//     output = new Output(idOutflow, setores.entertainment, "Filme0", 30.5)
//     outflow.push(output)
//     idOutflow++
//     output = new Output(idOutflow, setores.entertainment, "Filme1", 60.5)
//     outflow.push(output)
//     idOutflow++

//     output = new Output(idOutflow, setores.health, "Vacina0", 150.99)
//     outflow.push(output)
//     idOutflow++
//     output = new Output(idOutflow, setores.health, "Vacina1", 3.99)
//     outflow.push(output)
//     idOutflow++

//     output = new Output(idOutflow, setores.transport, "Uber0", 150.99)
//     outflow.push(output)
//     idOutflow++
//     output = new Output(idOutflow, setores.transport, "Uber1", 15.90)
//     outflow.push(output)
//     idOutflow++

//     input = new Input(idInflow, "Venda0", 150.99)
//     inflow.push(input)
//     idInflow++
//     input = new Input(idInflow, "Venda1", 157.90)
//     inflow.push(input)
//     idInflow++
// }

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

function printMenuAccount() {
    console.log("------------------CONTAS------------------")
    console.log("1 - CADASTRO")
    console.log("2 - VER DADOS CADASTRADOS")
    console.log("3 - ACESSAR FUNCIONALIDADES")

    option = Number(prompt("Opção escolhida: "))
}

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


// O código abaixo pode ser usado como estrutura para
// ampliar a área de cadastro de clientes
// do{
//     printMenuAccount()

//     switch (option) {
//         case 1:
//             acc = account.createAccount(idAcc)
//             break;
//         case 2:
//             if(acc == null){
//                 option = 0
//                 console.log(`Crie uma conta primeiro!`)
//             } else {
//                 account.showDataAccount(acc)
//             }
//             break;
//         case 3:
//             if(acc == null){
//                 option = 0
//                 console.log(`Crie uma conta primeiro!`)
//             }
//             break;
//         default:
//             break;
//     }
// } while(option != 3)

console.log("~~~~~~~~~~ADICIONAR CONTA~~~~~~~~~~\n")
acc = account.createAccount(idAcc)
idAcc++

printLine(40, 1)
account.showDataAccount(acc)
printLine(40, 1)

printLine(40,2)

// do{
//     printMenu()
//     printLine(40, 1)
//     switch (option) {
//         case 1:
//             console.log("~~~~~~~~~~ADICIONAR GASTO~~~~~~~~~~\n")
//             outflow.push(Output.adicionarGasto(idOutflow))
//             idOutflow++
//             break;
//         case 2:
//             console.log("~~~~~~~~~~REMOVER GASTO~~~~~~~~~~\n")
//             Output.removerGastos(outflow)
//             break;
//         case 3:
//             console.log("~~~~~~~~~~LISTAR GASTOS~~~~~~~~~~\n")
//             Output.listarGastos(outflow)
//             break;
//         case 4:
//             console.log("~~~~~~~~~~EDITAR GASTOS~~~~~~~~~~\n")
//             Output.editarGastos(outflow)
//             break;
//         case 5:
//             console.log("~~~~~~~~~~ADICIONAR GANHO~~~~~~~~~~\n")
//             inflow.push(Input.adicionarGanho(idInflow))
//             idInflow++
//             break;
//         case 6:
//             console.log("~~~~~~~~~~REMOVER GANHO~~~~~~~~~~\n")
//             Input.removerGanhos(inflow)
//             break;
//         case 7:
//             console.log("~~~~~~~~~~LISTAR GANHOS~~~~~~~~~~\n")
//             Input.listarGanhos(inflow)
//             break;
//         case 8:
//             console.log("~~~~~~~~~~EDITAR GANHO~~~~~~~~~~\n")
//             Input.editarGanhos(inflow)
//             break;
//         case 9:
//             console.log("~~~~~~~~~~GERAR EXTRATO~~~~~~~~~~\n")
//             financialStats.generateStats(inflow, outflow)
//             break;
//         case 10:
//             console.log("OBRIGADO POR UTILIZAR O PROGRAMA!\n")
//             break;
//         default:
//             console.log("OPÇÃO INCORRETA! SIGA O MENU E DIGITE NOVAMENTE!\n")
//             break;
//     }
//     printLine(40, 2)
// } while (option != 10)